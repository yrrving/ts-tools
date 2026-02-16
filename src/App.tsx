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
        <Route path="/:slug" element={<Placeholder />} />
      </Route>
    </Routes>
  )
}
