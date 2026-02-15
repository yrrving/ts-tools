import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Placeholder from './pages/Placeholder'
import PasswordGenerator from './pages/tools/PasswordGenerator'
import TextTools from './pages/tools/TextTools'
import JsonFormatter from './pages/tools/JsonFormatter'
import Base64Encoder from './pages/tools/Base64Encoder'

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
        <Route path="/:slug" element={<Placeholder />} />
      </Route>
    </Routes>
  )
}
