import MediaQuery from "react-responsive"
import { navLinks } from "../data"

const Navbar = () => 
{
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
          <ul className="navbar-links-sm">
            {
              navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <a href="#" className="navbar-link-sm">{navLink.title}</a>
                </li>
              ))
            }
          </ul>
          <span><img src="/images/icon-menu.svg" alt="" /></span>
        </MediaQuery>
      </nav>
    </>
  )
}

export default Navbar