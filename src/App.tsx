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
import Calculator from './pages/tools/Calculator'
import PercentCalc from './pages/tools/PercentCalc'
import RandomNumber from './pages/tools/RandomNumber'
import Stopwatch from './pages/tools/Stopwatch'
import CountdownTimer from './pages/tools/CountdownTimer'
import PomodoroTimer from './pages/tools/PomodoroTimer'
import Notepad from './pages/tools/Notepad'
import RandomPicker from './pages/tools/RandomPicker'
import LoremIpsum from './pages/tools/LoremIpsum'
import Metronome from './pages/tools/Metronome'
import UserAgentInfo from './pages/tools/UserAgentInfo'
import JwtDecoder from './pages/tools/JwtDecoder'
import CronParser from './pages/tools/CronParser'
import CsvJson from './pages/tools/CsvJson'
import DiffCompare from './pages/tools/DiffCompare'
import WhiteNoise from './pages/tools/WhiteNoise'
import PitchDetector from './pages/tools/PitchDetector'
import CodeMinifier from './pages/tools/CodeMinifier'
import CssGradient from './pages/tools/CssGradient'
import AsciiArt from './pages/tools/AsciiArt'
import DnsLookup from './pages/tools/DnsLookup'
import SslCheck from './pages/tools/SslCheck'
import HttpHeaders from './pages/tools/HttpHeaders'
import FaviconGenerator from './pages/tools/FaviconGenerator'
import ImageCropper from './pages/tools/ImageCropper'
import ImageCollage from './pages/tools/ImageCollage'
import PixelCounter from './pages/tools/PixelCounter'
import CutFileGenerator from './pages/tools/CutFileGenerator'
import PdfTools from './pages/tools/PdfTools'
import OcrTool from './pages/tools/OcrTool'
import BackgroundRemover from './pages/tools/BackgroundRemover'

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
        <Route path="/miniraknare" element={<Calculator />} />
        <Route path="/procent-raknare" element={<PercentCalc />} />
        <Route path="/slumptalsgenerator" element={<RandomNumber />} />
        <Route path="/stoppur" element={<Stopwatch />} />
        <Route path="/nedrakningstimer" element={<CountdownTimer />} />
        <Route path="/pomodoro-timer" element={<PomodoroTimer />} />
        <Route path="/anteckningsblock" element={<Notepad />} />
        <Route path="/slumpmassigt-val" element={<RandomPicker />} />
        <Route path="/lorem-ipsum" element={<LoremIpsum />} />
        <Route path="/metronom" element={<Metronome />} />
        <Route path="/useragent-info" element={<UserAgentInfo />} />
        <Route path="/jwt-dekodare" element={<JwtDecoder />} />
        <Route path="/cron-tolkare" element={<CronParser />} />
        <Route path="/csv-json" element={<CsvJson />} />
        <Route path="/diff-jamforare" element={<DiffCompare />} />
        <Route path="/vit-brus" element={<WhiteNoise />} />
        <Route path="/tonhojdsmatare" element={<PitchDetector />} />
        <Route path="/kodminifierare" element={<CodeMinifier />} />
        <Route path="/css-gradient" element={<CssGradient />} />
        <Route path="/ascii-konst" element={<AsciiArt />} />
        <Route path="/dns-uppslagning" element={<DnsLookup />} />
        <Route path="/ssl-kontroll" element={<SslCheck />} />
        <Route path="/http-headers" element={<HttpHeaders />} />
        <Route path="/favicon-generator" element={<FaviconGenerator />} />
        <Route path="/bildbeskärare" element={<ImageCropper />} />
        <Route path="/bildkollage" element={<ImageCollage />} />
        <Route path="/pixelraknare" element={<PixelCounter />} />
        <Route path="/skarfilsgenerator" element={<CutFileGenerator />} />
        <Route path="/pdf-verktyg" element={<PdfTools />} />
        <Route path="/ocr" element={<OcrTool />} />
        <Route path="/bakgrundsborttagare" element={<BackgroundRemover />} />
        <Route path="/:slug" element={<Placeholder />} />
      </Route>
    </Routes>
  )
}
