import { CSSProperties } from 'react'

function Footer() {
  const footerStyle: CSSProperties = {
    color: '#FFF',
    textDecoration: 'underline',
  }

  const footerContainerStyle: CSSProperties = {
    backgroundImage: 'url(client/public/footer2.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#000',
    padding: '20px',
    textAlign: 'center',
    margin: '0',
    width: '100%',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }

  const textContainerStyle: CSSProperties = {
    flex: '1 1 50%',
    marginBottom: '10px',
    textAlign: 'right',
  }

  const imageContainerStyle: CSSProperties = {
    flex: '1 1 20%',
    marginBottom: '10px',
    textAlign: 'left',
  }

  const imageStyle: CSSProperties = {
    height: '300px',
    maxWidth: '100%',
    paddingLeft: '100px',
  }

  return (
    <div style={footerContainerStyle}>
      <div style={textContainerStyle}>
        <h3>
          Send your questions to us:{' '}
          <a
            href="mailto:hello@sea-auckland.nz"
            target="_blank"
            style={footerStyle}
          >
            hello@sea-auckland.nz
          </a>
        </h3>
        <h3>
          Hear About Special Tours First by{' '}
          <a href="" style={footerStyle}>
            Subscribing Here
          </a>
        </h3>
        <h3>
          Call Us For Anything Else:{' '}
          <a href="tel:+64204732255" style={footerStyle}>
            +64 20 4 SEAAKL
          </a>
        </h3>
        <h3>
          Click Here To View The{' '}
          <a href="client/public/tcs.pdf" target="_blank" style={footerStyle}>
            Full T's&C's
          </a>
        </h3>
      </div>
      <div style={imageContainerStyle}>
        <img
          src="client/public/pestfreewarrant.png"
          alt="Pest Free Warrant"
          style={imageStyle}
        />
      </div>
    </div>
  )
}

export default Footer
