import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Placeholder from './pages/Placeholder'
import PasswordGenerator from './pages/tools/PasswordGenerator'
import TextTools from './pages/tools/TextTools'
import JsonFormatter from './pages/tools/JsonFormatter'
import Base64Encoder from './pages/tools/Base64Encoder'
import HashGenerator from './pages/tools/HashGenerator'
import RegexTester from './pages/tools/RegexTester'
import QrCodeTool from './pages/tools/QrCode'
import KeyboardTester from './pages/tools/KeyboardTester'
import UnitConverter from './pages/tools/UnitConverter'
import ColorPalette from './pages/tools/ColorPalette'
import MarkdownPreview from './pages/tools/MarkdownPreview'
import ImageCompressor from './pages/tools/ImageCompressor'
import TimeZones from './pages/tools/TimeZones'
import FileAnalyzer from './pages/tools/FileAnalyzer'
import IpInfo from './pages/tools/IpInfo'
import TextToSpeech from './pages/tools/TextToSpeech'
import SpeechToText from './pages/tools/SpeechToText'
import PngToSvg from './pages/tools/PngToSvg'
import RulerTool from './pages/tools/RulerTool'
import Translator from './pages/tools/Translator'
import BandwidthTest from './pages/tools/BandwidthTest'
import MediaConverter from './pages/tools/MediaConverter'
import EmbroideryViewer from './pages/tools/EmbroideryViewer'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/losenordsgenerator" element={<PasswordGenerator />} />
        <Route path="/textverktyg" element={<TextTools />} />
        <Route path="/json-formaterare" element={<JsonFormatter />} />
        <Route path="/base64-kodare" element={<Base64Encoder />} />
        <Route path="/hash-generator" element={<HashGenerator />} />
        <Route path="/regex-testare" element={<RegexTester />} />
        <Route path="/qr-kod" element={<QrCodeTool />} />
        <Route path="/tangentbordstest" element={<KeyboardTester />} />
        <Route path="/enhetsomvandlare" element={<UnitConverter />} />
        <Route path="/fargpalett" element={<ColorPalette />} />
        <Route path="/markdown-forhandsgranskning" element={<MarkdownPreview />} />
        <Route path="/bildkomprimering" element={<ImageCompressor />} />
        <Route path="/tidszoner" element={<TimeZones />} />
        <Route path="/filanalys" element={<FileAnalyzer />} />
        <Route path="/ip-info" element={<IpInfo />} />
        <Route path="/text-till-tal" element={<TextToSpeech />} />
        <Route path="/tal-till-text" element={<SpeechToText />} />
        <Route path="/png-till-svg" element={<PngToSvg />} />
        <Route path="/linjal" element={<RulerTool />} />
        <Route path="/oversattare" element={<Translator />} />
        <Route path="/bandbreddstest" element={<BandwidthTest />} />
        <Route path="/mediakonverterare" element={<MediaConverter />} />
        <Route path="/brodyrkortsvisare" element={<EmbroideryViewer />} />
        <Route path="/:slug" element={<Placeholder />} />
      </Route>
    </Routes>
  )
}
