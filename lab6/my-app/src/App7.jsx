import './App7.css';
import React from "react"
import { useState } from 'react'

import Header from './components/Header';
import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
    const [likes, setLikes] = useState(0)
    const [textStyle, setStyle] = useState({
        color: '#22FF22',
        fontSize: 18
    })
    return (
        <div className="grid-parent">
            <Header textStyle={textStyle} likes={likes}/>
            <Sidebar textStyle={textStyle} setStyle={setStyle} />
            <MainArea textStyle={textStyle} />
            <Footer setStyle={setStyle} likes={likes} setLikes={setLikes} textStyle={textStyle} />
        </div>
    )
}
export default App