import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Upload, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface Stitch {
  x: number
  y: number
  type: 'normal' | 'move' | 'trim' | 'end'
  colorIndex: number
}

interface EmbroideryData {
  stitches: Stitch[]
  colors: string[]
  width: number
  height: number
  stitchCount: number
  colorChanges: number
}

const PES_THREAD_COLORS = [
  '#1a0a94', '#0f75ff', '#00934c', '#babdfe', '#ec0000',
  '#e4995a', '#cc48ab', '#fdc4fa', '#dd84cd', '#6bd38a',
  '#e4a945', '#ffbd42', '#ffe600', '#6cd900', '#c1a941',
  '#b5ad97', '#ba9c5f', '#faf59e', '#808080', '#000000',
  '#001cdf', '#df00b8', '#626262', '#69260d', '#ff0060',
  '#bf8200', '#f39178', '#ff6805', '#f0f0f0', '#c832cd',
  '#b0bf9b', '#65bfeb', '#ffba04', '#fff06c', '#feca15',
  '#f38101', '#37a923', '#23465f', '#a6a695', '#cebfa6',
  '#96aa02', '#f1429f', '#ff008c', '#fef2b0', '#56b738',
  '#bfdfce', '#fa2b4e', '#f5800a', '#f57f7f', '#deb7b7',
  '#cec8c8', '#e60000', '#810080', '#a74880', '#0000e4',
  '#766ef1', '#dedfde', '#e0a100', '#aa7b01', '#cda2a2',
]

function parsePes(buffer: ArrayBuffer): EmbroideryData | null {
  const view = new DataView(buffer)
  const bytes = new Uint8Array(buffer)

  // Check PES header
  const header = String.fromCharCode(...bytes.slice(0, 4))
  if (header !== '#PES') return null

  // Find PEC section offset
  const pecOffset = view.getUint32(8, true)
  if (pecOffset >= buffer.byteLength) return null

  // Skip PEC header to find stitch data
  let pos = pecOffset + 48 // Skip PEC header area
  const numColors = bytes[pos] + 1
  pos += 1

  // Read color indices
  const colorIndices: number[] = []
  for (let i = 0; i < numColors; i++) {
    colorIndices.push(bytes[pos + i])
  }
  pos += numColors

  // Skip to stitch data (look for 0x00 0x00 marker after color list, plus padding)
  // PEC stitch data starts after the thumbnail
  pos = pecOffset + 532

  const stitches: Stitch[] = []
  let x = 0
  let y = 0
  let colorIdx = 0

  while (pos + 1 < buffer.byteLength) {
    const b0 = bytes[pos]
    const b1 = bytes[pos + 1]

    if (b0 === 0xff && b1 === 0x00) break // end of stitches

    if (b0 === 0xfe && b1 === 0xb0) {
      // Color change
      pos += 2
      colorIdx++
      if (pos < buffer.byteLength) pos++ // skip color byte
      continue
    }

    let dx = 0
    let dy = 0
    let type: Stitch['type'] = 'normal'

    if (b0 & 0x80) {
      // 12-bit x
      if (b0 & 0x20) type = 'move'
      dx = ((b0 & 0x0f) << 8) + b1
      if (dx >= 2048) dx -= 4096
      pos += 2
    } else {
      dx = b0
      if (dx >= 64) dx -= 128
      pos += 1
    }

    if (pos >= buffer.byteLength) break
    const b2 = bytes[pos]
    const b3 = pos + 1 < buffer.byteLength ? bytes[pos + 1] : 0

    if (b2 & 0x80) {
      if (b2 & 0x20) type = 'move'
      dy = ((b2 & 0x0f) << 8) + b3
      if (dy >= 2048) dy -= 4096
      pos += 2
    } else {
      dy = b2
      if (dy >= 64) dy -= 128
      pos += 1
    }

    x += dx
    y += dy
    stitches.push({ x, y, type, colorIndex: Math.min(colorIdx, colorIndices.length - 1) })
  }

  if (stitches.length === 0) return null

  const xs = stitches.map((s) => s.x)
  const ys = stitches.map((s) => s.y)
  const minX = Math.min(...xs)
  const minY = Math.min(...ys)
  const maxX = Math.max(...xs)
  const maxY = Math.max(...ys)

  // Normalize positions
  stitches.forEach((s) => {
    s.x -= minX
    s.y -= minY
  })

  const colors = colorIndices.map((ci) => PES_THREAD_COLORS[ci % PES_THREAD_COLORS.length])

  return {
    stitches,
    colors,
    width: maxX - minX,
    height: maxY - minY,
    stitchCount: stitches.filter((s) => s.type === 'normal').length,
    colorChanges: numColors - 1,
  }
}

function parseDst(buffer: ArrayBuffer): EmbroideryData | null {
  const bytes = new Uint8Array(buffer)
  if (buffer.byteLength < 512) return null

  // DST header is 512 bytes
  const stitches: Stitch[] = []
  let x = 0
  let y = 0
  let colorIdx = 0

  // Parse stitch data starting at byte 512
  for (let pos = 512; pos + 2 < buffer.byteLength; pos += 3) {
    const b0 = bytes[pos]
    const b1 = bytes[pos + 1]
    const b2 = bytes[pos + 2]

    // End of file
    if (b0 === 0 && b1 === 0 && b2 === 0xf3) break

    let dx = 0
    let dy = 0
    let type: Stitch['type'] = 'normal'

    // Decode X
    if (b0 & 0x01) dx += 1
    if (b0 & 0x02) dx -= 1
    if (b0 & 0x04) dx += 9
    if (b0 & 0x08) dx -= 9
    if (b1 & 0x01) dx += 3
    if (b1 & 0x02) dx -= 3
    if (b1 & 0x04) dx += 27
    if (b1 & 0x08) dx -= 27
    if (b2 & 0x01) dx += 81
    if (b2 & 0x02) dx -= 81

    // Decode Y
    if (b0 & 0x80) dy += 1
    if (b0 & 0x40) dy -= 1
    if (b0 & 0x20) dy += 9
    if (b0 & 0x10) dy -= 9
    if (b1 & 0x80) dy += 3
    if (b1 & 0x40) dy -= 3
    if (b1 & 0x20) dy += 27
    if (b1 & 0x10) dy -= 27
    if (b2 & 0x80) dy += 81
    if (b2 & 0x40) dy -= 81

    // Command flags
    if (b2 & 0x40) type = 'move'
    if ((b2 & 0xc3) === 0xc3) {
      colorIdx++
      type = 'move'
    }

    x += dx
    y += dy
    stitches.push({ x, y, type, colorIndex: colorIdx })
  }

  if (stitches.length === 0) return null

  const xs = stitches.map((s) => s.x)
  const ys = stitches.map((s) => s.y)
  const minX = Math.min(...xs)
  const minY = Math.min(...ys)
  const maxX = Math.max(...xs)
  const maxY = Math.max(...ys)

  stitches.forEach((s) => {
    s.x -= minX
    s.y -= minY
  })

  // Generate colors for DST (doesn't store color info)
  const numColors = colorIdx + 1
  const defaultColors = ['#000000', '#ff0000', '#00aa00', '#0000ff', '#ff8800', '#aa00aa', '#00aaaa', '#888888']
  const colors = Array.from({ length: numColors }, (_, i) => defaultColors[i % defaultColors.length])

  return {
    stitches,
    colors,
    width: maxX - minX,
    height: maxY - minY,
    stitchCount: stitches.filter((s) => s.type === 'normal').length,
    colorChanges: numColors - 1,
  }
}

function parseEmbroidery(buffer: ArrayBuffer, fileName: string): EmbroideryData | null {
  const ext = fileName.toLowerCase().split('.').pop()
  if (ext === 'pes') return parsePes(buffer)
  if (ext === 'dst') return parseDst(buffer)
  return null
}

export default function EmbroideryViewer() {
  const { t } = useLanguage()
  const translation = t.tools['brodyrkortsvisare']

  const fileRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [data, setData] = useState<EmbroideryData | null>(null)
  const [fileName, setFileName] = useState('')
  const [zoom, setZoom] = useState(1)
  const [error, setError] = useState('')

  const renderCanvas = useCallback((embData: EmbroideryData, z: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const padding = 20
    const scale = Math.min(
      (canvas.width - padding * 2) / Math.max(embData.width, 1),
      (canvas.height - padding * 2) / Math.max(embData.height, 1)
    ) * z

    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Center offset
    const offsetX = (canvas.width - embData.width * scale) / 2
    const offsetY = (canvas.height - embData.height * scale) / 2

    ctx.lineWidth = Math.max(1, scale * 0.8)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    let prevX = 0
    let prevY = 0
    let prevColorIdx = 0

    ctx.beginPath()
    ctx.strokeStyle = embData.colors[0] || '#000000'

    for (const stitch of embData.stitches) {
      const sx = stitch.x * scale + offsetX
      const sy = stitch.y * scale + offsetY

      if (stitch.colorIndex !== prevColorIdx) {
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = embData.colors[stitch.colorIndex % embData.colors.length] || '#000000'
        prevColorIdx = stitch.colorIndex
      }

      if (stitch.type === 'move') {
        ctx.moveTo(sx, sy)
      } else {
        if (prevX === 0 && prevY === 0) {
          ctx.moveTo(sx, sy)
        } else {
          ctx.lineTo(sx, sy)
        }
      }

      prevX = sx
      prevY = sy
    }
    ctx.stroke()
  }, [])

  useEffect(() => {
    if (data) renderCanvas(data, zoom)
  }, [data, zoom, renderCanvas])

  const loadFile = async (file: File) => {
    setError('')
    setFileName(file.name)

    try {
      const buffer = await file.arrayBuffer()
      const result = parseEmbroidery(buffer, file.name)

      if (!result) {
        setError('Kunde inte läsa filen. Kontrollera att det är en giltig PES- eller DST-fil.')
        setData(null)
        return
      }

      setData(result)
      setZoom(1)
    } catch {
      setError('Fel vid inläsning av filen.')
      setData(null)
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.backToTools}
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Upload */}
      <div
        onClick={() => fileRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-8 text-center transition-colors hover:border-blue-400 dark:hover:border-blue-500"
      >
        <Upload className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 hc:text-white" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
          Klicka eller dra hit en brodyrifil
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">PES, DST</p>
        <input
          ref={fileRef}
          type="file"
          accept=".pes,.dst,.jef"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && loadFile(e.target.files[0])}
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {data && (
        <>
          {/* Controls */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 truncate">{fileName}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setZoom((z) => Math.max(0.25, z - 0.25))}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="flex items-center px-2 text-sm text-gray-600 dark:text-gray-400">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(4, z + 0.25))}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div className="overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white">
            <canvas
              ref={canvasRef}
              width={600}
              height={500}
              className="mx-auto block"
            />
          </div>

          {/* Metadata */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Stygn</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">{data.stitchCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Dimensioner</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">
                {(data.width / 10).toFixed(1)} x {(data.height / 10).toFixed(1)} mm
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Färgbyten</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">{data.colorChanges}</span>
            </div>
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300 block mb-2">Trådfärger</span>
              <div className="flex flex-wrap gap-2">
                {data.colors.map((color, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="h-5 w-5 rounded border border-gray-300 dark:border-gray-600"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
