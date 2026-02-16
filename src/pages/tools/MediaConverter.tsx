import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Upload, Download, RefreshCw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

type OutputFormat = 'wav' | 'webm-audio' | 'webm-video' | 'mp3-extract'

const OUTPUT_OPTIONS: { value: OutputFormat; label: string; type: 'audio' | 'video' }[] = [
  { value: 'wav', label: 'WAV (okomprimerat ljud)', type: 'audio' },
  { value: 'webm-audio', label: 'WebM (Opus ljud)', type: 'audio' },
  { value: 'webm-video', label: 'WebM (VP8 video)', type: 'video' },
  { value: 'mp3-extract', label: 'Extrahera ljud (WebM)', type: 'audio' },
]

function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
  const numChannels = buffer.numberOfChannels
  const sampleRate = buffer.sampleRate
  const length = buffer.length * numChannels * 2 + 44

  const out = new ArrayBuffer(length)
  const view = new DataView(out)

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i))
    }
  }

  writeString(0, 'RIFF')
  view.setUint32(4, length - 8, true)
  writeString(8, 'WAVE')
  writeString(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, numChannels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * numChannels * 2, true)
  view.setUint16(32, numChannels * 2, true)
  view.setUint16(34, 16, true)
  writeString(36, 'data')
  view.setUint32(40, length - 44, true)

  let offset = 44
  for (let i = 0; i < buffer.length; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, buffer.getChannelData(ch)[i]))
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true)
      offset += 2
    }
  }

  return out
}

export default function MediaConverter() {
  const { t } = useLanguage()
  const translation = t.tools['mediakonverterare']

  const fileRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [fileInfo, setFileInfo] = useState<{ type: string; duration: number; isVideo: boolean } | null>(null)
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('wav')
  const [converting, setConverting] = useState(false)
  const [result, setResult] = useState<{ url: string; size: number; name: string } | null>(null)
  const [error, setError] = useState('')
  const [progress, setProgress] = useState('')

  const loadFile = (f: File) => {
    setFile(f)
    setResult(null)
    setError('')

    const isVideo = f.type.startsWith('video/')
    const url = URL.createObjectURL(f)
    const media = isVideo ? document.createElement('video') : new Audio()
    media.src = url

    media.onloadedmetadata = () => {
      setFileInfo({ type: f.type, duration: media.duration, isVideo })
      setOutputFormat(isVideo ? 'webm-video' : 'wav')
    }
    media.onerror = () => {
      setFileInfo({ type: f.type, duration: 0, isVideo })
    }
  }

  const convertToWav = async (): Promise<Blob> => {
    if (!file) throw new Error('No file')
    const audioCtx = new AudioContext()
    const arrayBuffer = await file.arrayBuffer()
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)
    const wavBuffer = audioBufferToWav(audioBuffer)
    await audioCtx.close()
    return new Blob([wavBuffer], { type: 'audio/wav' })
  }

  const convertToWebmAudio = async (): Promise<Blob> => {
    if (!file) throw new Error('No file')
    setProgress('Dekodar ljud...')
    const audioCtx = new AudioContext()
    const arrayBuffer = await file.arrayBuffer()
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)

    setProgress('Kodar till WebM...')
    const source = audioCtx.createBufferSource()
    source.buffer = audioBuffer
    const dest = audioCtx.createMediaStreamDestination()
    source.connect(dest)
    source.connect(audioCtx.destination)
    source.start()

    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus'
      : 'audio/webm'
    const recorder = new MediaRecorder(dest.stream, { mimeType })
    const chunks: Blob[] = []
    recorder.ondataavailable = (e) => chunks.push(e.data)

    const done = new Promise<Blob>((resolve) => {
      recorder.onstop = () => resolve(new Blob(chunks, { type: 'audio/webm' }))
    })

    recorder.start()

    // Wait for audio to finish, then stop recording
    setTimeout(() => {
      recorder.stop()
      audioCtx.close()
    }, (audioBuffer.duration * 1000) + 500)
    return done
  }

  const convertVideoToWebm = async (): Promise<Blob> => {
    if (!file) throw new Error('No file')
    setProgress('Laddar video...')
    const video = document.createElement('video')
    video.src = URL.createObjectURL(file)
    video.muted = true

    await new Promise<void>((resolve) => { video.onloadeddata = () => resolve() })

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const canvasCtx = canvas.getContext('2d')!

    // Draw frames to canvas for capture
    const drawFrame = () => {
      canvasCtx.drawImage(video, 0, 0)
      if (!video.ended && !video.paused) requestAnimationFrame(drawFrame)
    }

    setProgress('Konverterar video...')
    const stream = canvas.captureStream(30)

    // Add audio track if the video has one
    try {
      const audCtx = new AudioContext()
      const src = audCtx.createMediaElementSource(video)
      const audioDest = audCtx.createMediaStreamDestination()
      src.connect(audioDest)
      src.connect(audCtx.destination)
      audioDest.stream.getAudioTracks().forEach((track) => stream.addTrack(track))
    } catch {
      // no audio track, that's fine
    }

    const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
      ? 'video/webm;codecs=vp9,opus'
      : 'video/webm'
    const recorder = new MediaRecorder(stream, { mimeType })
    const chunks: Blob[] = []
    recorder.ondataavailable = (e) => chunks.push(e.data)

    const done = new Promise<Blob>((resolve) => {
      recorder.onstop = () => resolve(new Blob(chunks, { type: 'video/webm' }))
    })

    recorder.start(100)
    video.play()
    drawFrame()

    video.onended = () => {
      recorder.stop()
    }

    // Safety timeout
    const maxDuration = Math.min(video.duration * 1000 + 2000, 300_000)
    setTimeout(() => {
      if (recorder.state === 'recording') recorder.stop()
    }, maxDuration)

    return done
  }

  const extractAudio = async (): Promise<Blob> => {
    return convertToWebmAudio()
  }

  const convert = async () => {
    if (!file) return
    setConverting(true)
    setError('')
    setResult(null)
    setProgress('Startar konvertering...')

    try {
      let blob: Blob
      let ext: string

      switch (outputFormat) {
        case 'wav':
          blob = await convertToWav()
          ext = 'wav'
          break
        case 'webm-audio':
          blob = await convertToWebmAudio()
          ext = 'webm'
          break
        case 'webm-video':
          blob = await convertVideoToWebm()
          ext = 'webm'
          break
        case 'mp3-extract':
          blob = await extractAudio()
          ext = 'webm'
          break
        default:
          throw new Error('Okänt format')
      }

      const baseName = file.name.replace(/\.[^.]+$/, '')
      setResult({
        url: URL.createObjectURL(blob),
        size: blob.size,
        name: `${baseName}.${ext}`,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Konverteringen misslyckades')
    } finally {
      setConverting(false)
      setProgress('')
    }
  }

  const downloadResult = () => {
    if (!result) return
    const link = document.createElement('a')
    link.download = result.name
    link.href = result.url
    link.click()
  }

  const availableFormats = fileInfo?.isVideo
    ? OUTPUT_OPTIONS
    : OUTPUT_OPTIONS.filter((o) => o.type === 'audio')

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
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
          Klicka eller dra hit en ljud- eller videofil
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">MP4, WebM, MP3, WAV, OGG, m.fl.</p>
        <input
          ref={fileRef}
          type="file"
          accept="audio/*,video/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && loadFile(e.target.files[0])}
        />
      </div>

      {file && fileInfo && (
        <>
          {/* File info */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Fil</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[60%]">{file.name}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Format</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">{fileInfo.type || 'Okänt'}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Storlek</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">{formatSize(file.size)}</span>
            </div>
            {fileInfo.duration > 0 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
                <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Längd</span>
                <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">{formatDuration(fileInfo.duration)}</span>
              </div>
            )}
          </div>

          {/* Output format */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-3">
            <label className="block text-sm font-medium text-gray-900 dark:text-white">Konvertera till</label>
            <div className="space-y-2">
              {availableFormats.map((fmt) => (
                <label
                  key={fmt.value}
                  className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                    outputFormat === fmt.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 hc:bg-blue-950'
                      : 'border-gray-200 dark:border-gray-700 hc:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="format"
                    value={fmt.value}
                    checked={outputFormat === fmt.value}
                    onChange={() => setOutputFormat(fmt.value)}
                    className="accent-blue-600"
                  />
                  <span className="text-sm text-gray-900 dark:text-white hc:text-white">{fmt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Convert button */}
          <button
            onClick={convert}
            disabled={converting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {converting ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                {progress || 'Konverterar...'}
              </>
            ) : (
              'Konvertera'
            )}
          </button>

          {/* Error */}
          {error && (
            <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-900/20 hc:bg-black hc:border-white p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-800 dark:text-green-300 hc:text-white">
                  Konvertering klar
                </span>
                <span className="text-xs text-green-600 dark:text-green-400 font-mono">{formatSize(result.size)}</span>
              </div>

              {/* Preview */}
              {outputFormat === 'webm-video' ? (
                <video src={result.url} controls className="w-full rounded-lg" />
              ) : (
                <audio src={result.url} controls className="w-full" />
              )}

              <button
                onClick={downloadResult}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                <Download className="h-4 w-4" />
                Ladda ner {result.name}
              </button>
            </div>
          )}
        </>
      )}

      <p className="text-xs text-gray-400 dark:text-gray-500 hc:text-gray-300 text-center">
        Konvertering sker lokalt i webbl&auml;saren. Inga filer skickas till n&aring;gon server.
      </p>
    </div>
  )
}
