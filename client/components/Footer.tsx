import { CSSProperties } from 'react'

function Footer() {
  const footerStyle: CSSProperties = {
    color: '#000',
    textDecoration: 'underline',
  }

  const footerContainerStyle: CSSProperties = {
    backgroundImage: 'url(client/public/wavepic.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#000',
    padding: '20px',
    textAlign: 'center',
    margin: '0',
    width: '100%',
    height: '500px',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }

  const textContainerStyle: CSSProperties = {
    flex: '1 1 38%',
    marginTop: 'auto',
    textAlign: 'right',
  }

  const imageContainerStyle: CSSProperties = {
    flex: '1 1 20%',
    marginBottom: '30px',
    marginTop: 'auto',
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
        <h4>
          Send your questions to us:{' '}
          <a
            href="mailto:hello@sea-auckland.nz"
            target="_blank"
            style={footerStyle}
          >
            hello@sea-auckland.nz
          </a>
        </h4>
        <h4>
          Hear About Special Tours First by{' '}
          <a href="" style={footerStyle}>
            Subscribing Here
          </a>
        </h4>
        <h4>
          Call Us For Anything Else:{' '}
          <a href="tel:+64204732255" style={footerStyle}>
            +64 20 4 SEAAKL
          </a>
        </h4>
        <h4>
          Click Here To View The{' '}
          <a href="client/public/tcs.pdf" target="_blank" style={footerStyle}>
            Full T's&C's
          </a>
        </h4>
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
