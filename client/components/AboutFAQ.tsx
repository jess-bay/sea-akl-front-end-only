import { CSSProperties, useState } from 'react'

function About() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const FAQs = [
    {
      question: 'Is There A Bond To Pay?',
      answer: [
        "Sea Auckland requires no additional bond from you for your time with us. Bonds are usually required by hire operators as the risk of riders crashing & damaging jet ski's is high.",
        'With Sea Auckland, you are with a guide the whole time, who not only takes you to the best spots, maximising your time on the water, but keeps you safe, away from reefs, rocks & wrecks, saving you money & stress.',
      ],
    },
    {
      question: 'Where is Sea Auckland located?',
      answer: [
        "Sea Auckland is located with Bayswater Marina, on Auckland's North Shore. Being located in the marina allows our customers a smooth & effortless departure & return without battling beaches, boat ramps & breaking shore waves.",
        'Arrive by ferry (10 minute ferry ride) or car (25 minute drive).',
      ],
    },
    {
      question: 'Can Weather Affect The Trips?',
      answer: [
        'Absolutely. The weather is something we cannot control & we must work with it.',
        "Sea Auckland may change your tour route if the day's weather deems it necessary to do so, therefore, please use our 'Weather' button on the Sea Auckland website to book the best forecasted days.",
        "The 'Waiheke' & 'Gulf' tours are most susceptible to weather so if you are 100% set on these tours & nothing else, please ensure you book on a good weather forecast as if the weather changes, we will be modifying the tours route.",
        "The beautiful thing about Auckland's Waitemata Harbour & Hauraki Gulf is no matter the weather, there are always sheltered pockets to find & discover.",
      ],
    },
    {
      question: 'Are There Rules To Follow When Riding A Jetski?',
      answer: [
        'Like the road, there are rules of the sea.',
        "That being said, you're joining a tour & by doing so, your guide makes sure you stay safe, out of trouble & maximising all the speed zones possible.",
        'The rules of the sea are fairly simple: ',
        '• 8km/h when 50m from another vessel/person and/or 200m from shore',
        '• Stay clear of the Devonport Navy Base & Ports of Auckland/Ferry terminal areas',
        '• 22km/h speed limit from Harbour Bridge to North Head (take it easy in the harbour, there is plenty to see and admire)',
      ],
    },
    {
      question: 'How Many People Per Wave Runner?',
      answer: [
        "Sea Auckland Jet Ski's are Maritime New Zealand surveyed & approved for 2 persons with a maximum combined weight of 200 kilograms.",
      ],
    },
    {
      question: 'How Long Will The Full Tour Take?',
      answer: [
        'Please arrive 15 minutes before your scheduled tour time for check in.',
        'All safety inductions start prompt at the scheduled times and cannot be delayed, late arrivals will result in loss of booking.',
        '(Example of timing for your tour)  Your 1 hour tour is scheduled at 8:30am please aim to arrive no later than 08.15am. The safety induction will start at 08.30am, you will then be set to enjoy your full 1 hour of time out on the water.',
      ],
    },
    {
      question: 'Are Advanced Bookings Required?',
      answer: [
        'Advanced bookings are required to ensure you secure your seat.',
        'Our phone is always on so please call if you want to get on the water at the last minute. Our business is to get you on a jet ski, so we will do everything we can do make that possible.',
      ],
    },
    {
      question: 'What Should I Wear & Are There Change Rooms?',
      answer: [
        'Wave Runners are fast, nimble & exciting to ride. This will ensure that you will get wet!',
        'Please bring comfortable & quick dry clothing.',
        "If you have a wetsuit, that is perfect. Bring it along, you won't regret it!",
        'Weatherproof jackets are provided on Waiheke & Gulf tours and available for hire on Harbour tour.',
        'There are public toilet facilities between our docks and the carpark, so please be ready in your kit before you make it down the wharf.',
      ],
    },
    {
      question: 'How Old Must I Be To Drive The Jetski?',
      answer: [
        "Age limits no one...... except if you're under 16, then you cannot drive. But you can be the navigator to those 16 years and older.",
        'The minimum age to be a passenger is 8 years old.',
      ],
    },
    {
      question: 'Project Our Hauraki Gulf',
      answer: [
        'Visit ourauckland.nz/haurakigulf to find out more from Auckland Council on how to protect the Hauraki Gulf.',
      ],
    },
  ]

  const toggleAnswer = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '50%',
    margin: '20px auto',
  }

  const headingStyle: CSSProperties = {
    textAlign: 'center',
    borderTop: '4px solid black',
    paddingTop: '10px',
    maxWidth: '40%',
    margin: '0 auto',
  }

  const textStyle: CSSProperties = {
    flex: 1,
    marginRight: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '1.8%',
  }

  return (
    <>
      <div style={{ ...containerStyle, marginTop: '100px' }}>
        <div style={textStyle}>
          <h1>Sea Auckland's Purpose</h1>
          <p>We enjoy the water & want you to as well.</p>
          <p>
            We saw an opportunity to provide visitors & kiwi's the unique chance
            to blend the boundaries of recreational adventure & environmentally
            conscious tourism.
          </p>
          <p>
            The Auckland harbour is complex with reefs, rocks, speed zones &
            rules of the sea. By providing guided jet ski adventures, we ensure
            you maximise your riding time without needing to worry "Where am I
            now?"
          </p>
          <p>
            Sea Auckland's promise to you is our adventures provide you with the
            best value for money when it comes to exploring the Waitemata
            Harbour & Hauraki Gulf
          </p>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={textStyle}>
          <h1>Sustainability</h1>
          <p>Working with nature, as nature is why we exist.</p>
          <p>
            By practising kaitiakitanga (guardianship), we bring people into the
            natural environment to witness its beauty, leaving & taking nothing
            but memories, photos & appreciation.
          </p>
          <p>
            We are visitors to The Waitemata Harbour & Hauraki Gulf, and wish to
            advocate for their importance by bringing you to witness them.
          </p>
          <p>
            Our fleet of modern Wave Runner Jet Ski's allow efficient, low
            impact enjoyment, whilst our Bayswater Marina location, limits our
            use of precious time, energy & resources.
          </p>
        </div>
      </div>
      <div className="faq-section" style={{ padding: '20px' }}>
        <h1 style={headingStyle}>FAQ's</h1>
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              maxWidth: '50%',
              margin: '0 auto',
            }}
          >
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: '#f7f7f7',
                fontSize: '2rem',
                margin: '10px',
                border: '2px solid blue',
              }}
            >
              {faq.question}
              <span style={{ float: 'right' }}>
                {expandedIndex === index ? '▼' : '▲'}
              </span>
            </div>
            {expandedIndex === index && (
              <div
                className="faq-answer"
                style={{
                  padding: '10px',
                  backgroundColor: '#f7f7f7',
                  margin: '10px',
                }}
              >
                {faq.answer.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default About
