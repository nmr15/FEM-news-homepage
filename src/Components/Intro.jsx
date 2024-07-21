import React from 'react'
import MediaQuery from "react-responsive"

const Intro = () => 
{
  return (
    <>
      <section>
        <div className="intro">
          <MediaQuery maxWidth={768}>
            <img src="/images/image-web-3-mobile.jpg" className="intro-img-sm" alt="" />
          </MediaQuery>
          <h1 className="intro-heading">
            The Bright Future of Web 3.0?
          </h1>
          <p className="intro-text">
            We dive into the next evolution of the web that claims to put the power of the platform 
            back into the hands of the people. But is it really fulfilling its promise?
          </p>
        </div>
      </section>
    </>
  )
}

export default Intro