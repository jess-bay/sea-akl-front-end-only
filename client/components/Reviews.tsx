import { useState } from 'react'

function Reviews() {
  const [isHovered, setIsHovered] = useState<number | null>(null)

  interface Testimonial {
    id: number
    imageUrl: string
    title: string
  }

  const testimonials: Testimonial[] = [
    {
      id: 1,
      imageUrl: 'client/public/customertestimonial1.png',
      title: 'Tour 1 Testimonial',
    },
    {
      id: 2,
      imageUrl: 'client/public/customertestimonial2.png',
      title: 'Tour 2 Testimonial',
    },
    {
      id: 3,
      imageUrl: 'client/public/customertestimonial3.png',
      title: 'Tour 3 Testimonial',
    },
    {
      id: 4,
      imageUrl: 'client/public/customertestimonial4.png',
      title: 'Tour 4 Testimonial',
    },
    {
      id: 5,
      imageUrl: 'client/public/customertestimonial5.png',
      title: 'Tour 5 Testimonial',
    },
  ]

  const handleMouseEnter = (id: number) => {
    setIsHovered(id)
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Check Out Some Of Our Customer Testimonials!</h1>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <a
          href="https://www.google.com/search?q=sea+auckland+reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Leave Us A Review On Google Here!</button>
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="card"
            style={{
              width: 'auto',
              height: 'auto',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={() => handleMouseEnter(testimonial.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="image-box"
              style={{
                position: 'relative',
                width: '100%',
                height: '1000px',
                overflow: 'hidden',
              }}
            >
              <img
                src={testimonial.imageUrl}
                alt="Customer Testimonial"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: '0.5s ease-in-out',
                  filter:
                    isHovered === testimonial.id
                      ? 'grayscale(1) brightness(0.4)'
                      : 'none',
                }}
              />
              <div
                className="content"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform:
                    isHovered === testimonial.id
                      ? 'translate(-50%, -50%) scale(1)'
                      : 'translate(-50%, -50%) scale(0)',
                  zIndex: '1',
                  color: '#FFF',
                  textAlign: 'center',
                  opacity: isHovered === testimonial.id ? '1' : '0',
                  transition:
                    'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                }}
              >
                <h1 style={{ transform: 'scale(1)', opacity: '1' }}>
                  {testimonial.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Reviews
