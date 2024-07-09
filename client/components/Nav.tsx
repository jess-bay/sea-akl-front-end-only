import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const navLinkStyle = {
    color: '#FFF',
    textDecoration: 'none',
  }

  return (
    <>
      <nav style={{ backgroundColor: '#007BFF', padding: '10px' }}>
        <ul
          style={{
            listStyleType: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '0',
            margin: '0',
          }}
        >
          <li>
            <Link to="/" style={navLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="https://book.sea-auckland.nz/"
              target="_blank"
              style={navLinkStyle}
            >
              Book Now
            </Link>
          </li>
          <li>
            <Link to="/about" style={navLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/tours" style={navLinkStyle}>
              Tours
            </Link>
          </li>
          <li>
            <Link
              to="https://book.sea-auckland.nz/card/create"
              target="_blank"
              style={navLinkStyle}
            >
              Gift Cards
            </Link>
          </li>
          <li>
            <Link to="/pestfree" style={navLinkStyle}>
              Pest Free
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
