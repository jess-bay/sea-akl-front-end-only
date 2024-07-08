import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <h1>Welcome to Auckland</h1>
        <h3>The Jewel of the South Pacific</h3>
        <p>
          Beyond Auckland's bars and restauirants, shopping & entertainment,
          lies the world famous Tikapa Moana/Hauraki Gulf Marine Park.
        </p>
        <p>
          Sea Auckland's boutique guided jet ski adventures take you further
          than most think possible, from the Auckland Harbour Bridge, to white
          sand beaches & nature reserves of the Gulf Islands.
        </p>
        <p>
          Your New Zealand experience is important to us & we wish for you to
          see Auckland at it's best.
        </p>
      </div>
      <br />
      <div>
        {/* Link the following to the booking site */}
        <h1>JET SKI ADVENTURES</h1>
        <a
          href="https://book.sea-auckland.nz/book/city-adventure/1#rvrd-1"
          target="_blank"
          className="city-tour-anchor"
        >
          <div className="city-tour-homepage">
            <h1>City</h1>
            <p>Duration 1 Hour</p>
          </div>
        </a>
        <a
          href="https://book.sea-auckland.nz/book/harbour-adventure/2#rvrd-1"
          target="_blank"
          className="harbour-tour-anchor"
        >
          <div className="harbour-tour-homepage">
            <h1>Harbour</h1>
            <p>Duration 1.5 Hours</p>
          </div>
        </a>
        <a
          href="https://book.sea-auckland.nz/book/waiheke-adventure/3#rvrd-1"
          target="_blank"
          className="waiheke-tour-anchor"
        >
          <div className="Waiheke-tour-homepage">
            <h1>Waiheke</h1>
            <p>Duration 3.5 Hours</p>
          </div>
        </a>
        <a
          href="https://book.sea-auckland.nz/book/gulf-adventure/4#rvrd-1"
          target="_blank"
          className="gulf-tour-anchor"
        >
          <div className="gulf-tour-homepage">
            <h1>Gulf</h1>
            <p>Duration 3.5 Hours</p>
          </div>
        </a>
        <a
          href="https://book.sea-auckland.nz/book/city-sunset-adventure/5#rvrd-1"
          target="_blank"
          className="sunset-tour-anchor"
        >
          <div className="sunset-tour-homepage">
            <h1>Sunset</h1>
            <p>Duration 1 Hour</p>
          </div>
        </a>
        {/* Link this next one to the gift card checkout */}
        <div className="giftcard-homepage">
          <h1>Gift Card</h1>
          <p>
            Click to buy a gift card for your friends, family or co-workers!
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
