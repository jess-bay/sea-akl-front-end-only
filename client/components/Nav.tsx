import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="https://book.sea-auckland.nz/" target="_blank">
              Book Now
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="https://book.sea-auckland.nz/card/create" target="_blank">
              Gift Cards
            </Link>
          </li>
          <li>
            <Link to="/pestfree">Pest Free</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
