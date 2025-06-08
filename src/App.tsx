import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
