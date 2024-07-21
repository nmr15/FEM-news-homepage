import { useState } from 'react'
import './App.scss'
import Navbar from "./Components/Navbar"
import Intro from "./Components/Intro"
import ArticleDark from "./Components/ArticleDark"
import ArticleLight from "./Components/ArticleLight"


function App() 
{

  return (
    <>
      <div className="container">
        <Navbar />
        <Intro />
        <ArticleDark />
        <ArticleLight />
      </div>
      
    </>
  )
}

export default App
