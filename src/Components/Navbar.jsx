import { useState } from 'react'
import MediaQuery from "react-responsive"
import { navLinks } from "../data"

const Navbar = () => 
{
  const [navWidth, setNavWidth] = useState("0");

  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <MediaQuery minWidth={769}>
          <ul className="navbar-links">
            {
              navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <a href="#" className="navbar-link">{navLink.title}</a>
                </li>
              ))
            }
          </ul>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <div className="navbar-sm" style={{ width: navWidth }}>
            <span className="navbar-toggle" onClick={() => setNavWidth("0")}><img src="/images/icon-menu-close.svg" alt="" /></span>
            <ul className="navbar-links-sm">

              {
                navLinks.map((navLink) => (
                  <li key={navLink.id}>
                    <a href="#" className="navbar-link-sm">{navLink.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          
          <span className="navbar-toggle" onClick={() => setNavWidth("68%")}><img src="/images/icon-menu.svg" alt="" /></span>
        </MediaQuery>
      </nav>
    </>
  )
}

export default Navbar