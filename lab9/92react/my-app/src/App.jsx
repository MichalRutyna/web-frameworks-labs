import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"

import './App.css'
import FlashSuccess from './components/FlashSuccess'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(
      {
      "email": "aaa@",
      "message": "bbb"
      }
  )
  const [errors, setErrors] = useState(
    {
    "message": "ddd",
    "email": "ccc"
    }
  )

  return (
    <Routes>
      <Route path="/" exact element={<FlashSuccess />} />
      <Route path="/contact" exact element={<Contact data={data} errors={errors}/>} />
      {/*
      {messages.success ? <FlashSuccess /> : ''}
      <h1>Working With Forms in Node.js</h1> */}
    </Routes>
  )
}

export default App
