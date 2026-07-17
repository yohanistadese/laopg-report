import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LockScreen from './components/LockScreen'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Progress from './pages/Progress'
import About from './pages/About'

const PASSWORD = 'LNJ'
const STORAGE_KEY = 'laopgUnlockedUntil'
const EXPIRY_MS = 24 * 60 * 60 * 1000

function isUnlocked() {
  const expiresAt = Number(localStorage.getItem(STORAGE_KEY))
  if (!expiresAt || Date.now() > expiresAt) {
    localStorage.removeItem(STORAGE_KEY)
    return false
  }
  return true
}

export default function App() {
  const [unlocked, setUnlocked] = useState(isUnlocked)

  function handleUnlock(input) {
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + EXPIRY_MS))
      setUnlocked(true)
      return true
    }
    return false
  }

  if (!unlocked) {
    return <LockScreen onUnlock={handleUnlock} />
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
