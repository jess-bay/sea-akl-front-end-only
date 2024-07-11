import { CSSProperties } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function Nav() {
  const navLinkStyle = {
    color: '#000',
    textDecoration: 'none',
    padding: '10px 15px',
    transition: 'color 0.3s ease',
    marginRight: '150px',
  }

  const logoStyle: CSSProperties = {
    height: '100px',
    marginRight: '10px',
    position: 'fixed',
  }

  return (
    <>
      <nav
        style={{
          backgroundColor: 'rgba(201, 238, 255, 0.8)',
          padding: '50px',
          width: '100%',
          // position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          src="client/public/logo.png"
          alt="Sea Auckland Logo"
          style={logoStyle}
        />
        <ul
          style={{
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
            margin: '0',
            flexGrow: 1,
          }}
        >
          <li></li>
          <li>
            <Link to="/" style={navLinkStyle} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="https://book.sea-auckland.nz/"
              target="_blank"
              style={navLinkStyle}
              className="nav-link"
            >
              Book Now
            </Link>
          </li>
          <li>
            <Link
              to="https://book.sea-auckland.nz/card/create"
              target="_blank"
              style={navLinkStyle}
              className="nav-link"
            >
              Gift Cards
            </Link>
          </li>
          <li>
            <Link to="/tours" style={navLinkStyle} className="nav-link">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/about" style={navLinkStyle} className="nav-link">
              About/FAQ
            </Link>
          </li>
          <li>
            <Link to="/pestfree" style={navLinkStyle} className="nav-link">
              Pest Free
            </Link>
          </li>
          <li>
            <Link to="/reviews" style={navLinkStyle} className="nav-link">
              Reviews
            </Link>
          </li>
          <li style={{ marginRight: '30px' }}>
            <a href="https://www.tiktok.com/@seaauckland" target="_blank">
              <FontAwesomeIcon icon={faTiktok} size="2x" color="#000" />
            </a>
          </li>
          <li style={{ marginRight: '30px' }}>
            <a href="https://www.instagram.com/sea_auckland/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#bc2a8d" />
            </a>
          </li>
          <li style={{ marginRight: '30px' }}>
            <a href="https://www.facebook.com/sea.auckland/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
