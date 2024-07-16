import React, { CSSProperties, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { useMediaQuery, useTheme } from '@mui/material'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Define the Nav component
const Nav: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery('(min-width: 426px) and (max-width: 768px)')
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkStyle: CSSProperties = {
    color: '#000',
    textDecoration: 'none',
    padding: isLargeScreen ? '10px 60px' : '10px 20px',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap',
    fontSize: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
  }

  const logoStyle: CSSProperties = {
    height: isTablet || isLargeScreen ? '80px' : '100px',
    marginRight: '10px',
  }

  const iconStyle: CSSProperties = {
    margin: '0 10px',
    fontSize: isMobile ? '30px' : isTablet || isLargeScreen ? '40px' : '70px',
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        backgroundColor: 'rgba(201, 238, 255, 0.8)',
        padding: isMobile ? '10px' : isTablet ? '20px' : '50px',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        display: 'flex',
        flexDirection: isMobile || isTablet ? 'column' : 'row',
        alignItems: 'center',
        textAlign: isMobile || isTablet ? 'center' : 'left',
      }}
      className="topnav"
    >
      {/* Social Media Icons for Mobile */}
      <div
        style={{
          display: isMobile || isTablet ? 'flex' : 'none',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
        <FontAwesomeIcon icon={faTiktok} style={iconStyle} />
        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
      </div>

      <img
        src="client/public/logo.png"
        alt="Sea Auckland Logo"
        style={logoStyle}
      />

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: isMobile || isTablet ? 'block' : 'none',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          margin: '10px',
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul
        style={{
          listStyleType: 'none',
          display:
            isMobile || isTablet ? (menuOpen ? 'block' : 'none') : 'flex',
          justifyContent: isLargeScreen ? 'center' : 'center',
          alignItems: 'center',
          padding: '0',
          margin: '0',
          flexGrow: 1,
          flexDirection: isMobile || isTablet ? 'column' : 'row',
          width: isMobile || isTablet ? '100%' : 'auto',
        }}
      >
        <li>
          <Link
            to="/"
            style={navLinkStyle}
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="https://book.sea-auckland.nz/"
            target="_blank"
            rel="noopener noreferrer"
            style={navLinkStyle}
            className="nav-link"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </li>
        <li>
          <a
            href="https://book.sea-auckland.nz/card/create"
            target="_blank"
            rel="noopener noreferrer"
            style={navLinkStyle}
            className="nav-link"
            onClick={closeMenu}
          >
            Gift Cards
          </a>
        </li>
        <li>
          <Link
            to="/tours"
            style={navLinkStyle}
            className="nav-link"
            onClick={closeMenu}
          >
            Tours
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={navLinkStyle}
            className="nav-link"
            onClick={closeMenu}
          >
            About/FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/pestfree"
            style={navLinkStyle}
            className="nav-link"
            onClick={closeMenu}
          >
            Pest Free
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            style={navLinkStyle}
            className="nav-link"
            onClick={closeMenu}
          >
            Reviews
          </Link>
        </li>
        <li>
          <div
            style={{
              display: isLargeScreen ? 'flex' : 'none',
              marginLeft: 'auto',
            }}
          >
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
            <FontAwesomeIcon icon={faTiktok} style={iconStyle} />
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
