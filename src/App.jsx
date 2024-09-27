import { useState } from 'react'
import './App.scss'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"



function App() 
{

  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
      </div>
      
    </>
  )
}

export default App
