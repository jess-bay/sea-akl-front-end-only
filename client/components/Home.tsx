import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const tourData = [
    {
      name: 'City',
      duration: '1 Hour',
      link: 'https://book.sea-auckland.nz/book/city-adventure/1#rvrd-1',
      moreInfoLink: '/tours#city',
    },
    {
      name: 'Harbour',
      duration: '1.5 Hours',
      link: 'https://book.sea-auckland.nz/book/harbour-adventure/2#rvrd-1',
      moreInfoLink: '/tours#harbour',
    },
    {
      name: 'Waiheke',
      duration: '3.5 Hours',
      link: 'https://book.sea-auckland.nz/book/waiheke-adventure/3#rvrd-1',
      moreInfoLink: '/tours#waiheke',
    },
    {
      name: 'Gulf',
      duration: '3.5 Hours',
      link: 'https://book.sea-auckland.nz/book/gulf-adventure/4#rvrd-1',
      moreInfoLink: '/tours#gulf',
    },
    {
      name: 'Sunset',
      duration: '1 Hour',
      link: 'https://book.sea-auckland.nz/book/city-sunset-adventure/5#rvrd-1',
      moreInfoLink: '/tours#sunset',
    },
  ]

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  const linkStyle = {
    textDecoration: 'none',
  }

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
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
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>JET SKI ADVENTURES</h1>
        {tourData.map((tour, index) => (
          <div
            key={index}
            style={{
              marginBottom: '20px',
              border: '1px solid #ccc',
              padding: '50px',
              borderRadius: '5px',
              marginLeft: '60px',
              marginRight: '60px',
            }}
          >
            <h2>{tour.name}</h2>
            <p>{tour.duration}</p>
            <a href={tour.link} target="_blank" style={linkStyle}>
              <button style={buttonStyle}>Book Now</button>
            </a>
            <Link to={tour.moreInfoLink} style={linkStyle}>
              <button style={buttonStyle}>More Information</button>
            </Link>
          </div>
        ))}
        <h1>Gift Card</h1>
        <a
          href="https://book.sea-auckland.nz/card/create"
          target="_blank"
          style={linkStyle}
        >
          <button style={buttonStyle}>Create a Gift Card!</button>
        </a>
      </div>
    </>
  )
}

export default Home
