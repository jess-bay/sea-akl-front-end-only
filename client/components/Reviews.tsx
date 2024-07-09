import { useState } from 'react'

function Reviews() {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)
  const [isHovered5, setIsHovered5] = useState(false)

  return (
    <>
      <div>
        <h1>Check Out Some Of Our Customer Testimonials!</h1>
      </div>
      <div>
        <a
          href="https://www.google.com/search?q=sea+auckland+reviews"
          target="_blank"
        >
          <button>Leave Us A Review On Google Here!</button>
        </a>
      </div>
      <div
        className="card"
        style={{
          width: '400px',
          aspectRatio: '1 / 0.7',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="image-box"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="client/public/customertestimonial1.png"
            alt="Customer Testimonial Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: '0.5s ease-in-out',
              filter: isHovered ? 'grayscale(1) brightness(0.4)' : 'none',
            }}
          />{' '}
          <div
            className="content"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: isHovered
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0)',
              zIndex: '1',
              color: '#FFF',
              textAlign: 'center',
              opacity: isHovered ? '1' : '0',
              transition:
                'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            }}
          >
            <h3
              style={{
                transform: 'scale(1)',
                opacity: '1',
              }}
            >
              Tour 1 Testimonial
            </h3>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: '400px',
          aspectRatio: '1 / 0.7',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <div
          className="image-box"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="client/public/customertestimonial2.png"
            alt="Customer Testimonial Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: '0.5s ease-in-out',
              filter: isHovered2 ? 'grayscale(1) brightness(0.4)' : 'none',
            }}
          />{' '}
          <div
            className="content"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: isHovered2
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0)',
              zIndex: '1',
              color: '#FFF',
              textAlign: 'center',
              opacity: isHovered2 ? '1' : '0',
              transition:
                'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            }}
          >
            <h3
              style={{
                transform: 'scale(1)',
                opacity: '1',
              }}
            >
              Tour 2 Testimonial
            </h3>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: '400px',
          aspectRatio: '1 / 0.7',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <div
          className="image-box"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="client/public/customertestimonial3.png"
            alt="Customer Testimonial Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: '0.5s ease-in-out',
              filter: isHovered3 ? 'grayscale(1) brightness(0.4)' : 'none',
            }}
          />{' '}
          <div
            className="content"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: isHovered3
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0)',
              zIndex: '1',
              color: '#FFF',
              textAlign: 'center',
              opacity: isHovered3 ? '1' : '0',
              transition:
                'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            }}
          >
            <h3
              style={{
                transform: 'scale(1)',
                opacity: '1',
              }}
            >
              Tour 3 Testimonial
            </h3>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: '400px',
          aspectRatio: '1 / 0.7',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <div
          className="image-box"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="client/public/customertestimonial4.png"
            alt="Customer Testimonial Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: '0.5s ease-in-out',
              filter: isHovered4 ? 'grayscale(1) brightness(0.4)' : 'none',
            }}
          />{' '}
          <div
            className="content"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: isHovered4
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0)',
              zIndex: '1',
              color: '#FFF',
              textAlign: 'center',
              opacity: isHovered4 ? '1' : '0',
              transition:
                'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            }}
          >
            <h3
              style={{
                transform: 'scale(1)',
                opacity: '1',
              }}
            >
              Tour 4 Testimonial
            </h3>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: '400px',
          aspectRatio: '1 / 0.7',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered5(true)}
        onMouseLeave={() => setIsHovered5(false)}
      >
        <div
          className="image-box"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="client/public/customertestimonial5.png"
            alt="Customer Testimonial Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: '0.5s ease-in-out',
              filter: isHovered5 ? 'grayscale(1) brightness(0.4)' : 'none',
            }}
          />{' '}
          <div
            className="content"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: isHovered5
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0)',
              zIndex: '1',
              color: '#FFF',
              textAlign: 'center',
              opacity: isHovered5 ? '1' : '0',
              transition:
                'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            }}
          >
            <h3
              style={{
                transform: 'scale(1)',
                opacity: '1',
              }}
            >
              Tour 5 Testimonial
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
