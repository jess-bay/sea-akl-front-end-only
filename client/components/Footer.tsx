import { CSSProperties } from 'react'

function Footer() {
  const footerStyle: CSSProperties = {
    color: '#FFF',
    textDecoration: 'underline',
  }

  return (
    <>
      {/* API for weather at the bay */}
      {/* API for map to show location */}
      <div
        style={{
          backgroundImage: 'url(client/public/wave.png)',
          color: '#000',
          padding: '20px',
          textAlign: 'center',
          margin: '0',
          width: '100%',
          bottom: 0,
          left: 0,
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <h3>
            Send your questions to us:{' '}
            <a href="mailto: hello@sea-auckland.nz" target="_blank">
              hello@sea-auckland.nz
            </a>
          </h3>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <h3>
            Hear About Special Tours First by <a href="">Subscribing Here</a>
          </h3>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <h3>
            Call Us For Anything Else:{' '}
            <a href="tel:+64204732255">+64 20 4 SEAAKL</a>
          </h3>
        </div>
        <div>
          <h3>
            {' '}
            Click Here To View The{' '}
            <a href="client/public/tcs.pdf" target="_blank">
              Full T's&C's
            </a>
          </h3>
        </div>
        <div>
          <img
            src="client/public/pestfreewarrant.png"
            alt="Pest Free Warrant"
            style={{ height: '300px' }}
          />
        </div>
      </div>
    </>
  )
}

export default Footer
