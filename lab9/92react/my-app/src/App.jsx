import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"

import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {
  const [status, setStatus] = useState(0)

  return (
    <Routes>
      <Route path="/" exact element={<Home status={status} />} />
      <Route path="/contact" exact element={<Contact setStatus={setStatus} />} />
    </Routes>
  )
}

export default App
