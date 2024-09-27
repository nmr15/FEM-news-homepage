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
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
      
    </>
  )
}

export default App
