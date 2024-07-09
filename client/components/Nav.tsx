import { Link } from 'react-router-dom'

function Nav() {
  const navLinkStyle = {
    color: '#000',
    textDecoration: 'none',
  }

  return (
    <>
      <nav
        style={{
          backgroundColor: '#e9f0ff',
          padding: '10px',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
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
          <li>
            <Link to="/reviews" style={navLinkStyle}>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
