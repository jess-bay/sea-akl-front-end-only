import { CSSProperties } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

function Home() {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

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

  const buttonStyle: CSSProperties = {
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    padding: isTablet ? '8px 16px' : '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: isTablet ? '1.5rem' : '2rem',
  }

  const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: '#007BFF',
  }

  const tourContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: isTablet ? '90%' : '50%',
    margin: '20px auto',
    flexDirection: isTablet ? 'column' : 'row',
    alignItems: 'center',
  }

  const tourTextStyle: CSSProperties = {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '1.8%',
    width: isTablet ? '100%' : 'auto',
    alignItems: isMobile ? 'left' : 'center',
  }

  const headingStyle: CSSProperties = {
    textAlign: 'center',
    borderTop: '4px solid black',
    paddingTop: '10px',
    maxWidth: isTablet ? '80%' : '40%',
    margin: '0 auto',
    fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '5rem',
  }

  const smallHeadingStyle: CSSProperties = {
    textAlign: 'center',
    paddingTop: '10px',
    maxWidth: isTablet ? '80%' : '40%',
    margin: '0 auto',
    fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
  }

  return (
    <>
      <div
        style={{
          ...tourContainerStyle,
          marginTop: '100px',
          marginBottom: '100px',
        }}
      >
        <div style={tourTextStyle}>
          <h1 style={headingStyle}>Welcome to Auckland</h1>
          <h3 style={smallHeadingStyle}>The Jewel of the South Pacific</h3>
          <p>
            Beyond Auckland's bars and restaurants, shopping & entertainment,
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
      </div>
      <div>
        <h1 style={headingStyle}>JET SKI ADVENTURES</h1>
        <div>
          {tourData.map((tour, index) => (
            <div key={index} style={tourContainerStyle}>
              <div style={tourTextStyle}>
                <h3>{tour.name}</h3>
                <p>{tour.duration}</p>
                <a href={tour.link} target="_blank" style={linkStyle}>
                  <button style={buttonStyle}>Book Now</button>
                </a>
                <Link to={tour.moreInfoLink} style={linkStyle}>
                  <button style={buttonStyle}>More Information</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={tourContainerStyle}>
          <div style={tourTextStyle}>
            <h3>Gift Card</h3>
            <a
              href="https://book.sea-auckland.nz/card/create"
              target="_blank"
              style={linkStyle}
            >
              <button style={buttonStyle}>Create a Gift Card!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
