import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Placeholder from './pages/Placeholder'
import PasswordGenerator from './pages/tools/PasswordGenerator'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/losenordsgenerator" element={<PasswordGenerator />} />
        <Route path="/:slug" element={<Placeholder />} />
      </Route>
    </Routes>
  )
}
