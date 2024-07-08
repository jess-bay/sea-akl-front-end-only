import React from 'react'

function About() {
  const FAQs = [
    {
      question: 'Is There A Bond To Pay?',
      answer:
        "Sea Auckland requires no additional bond from you for your time with us. Bonds are usually required by hire operators as the risk of riders crashing & damaging jet ski's is high. With Sea Auckland, you are with a guide the whole time, who not only takes you to the best spots, maximising your time on the water, but keeps you safe, away from reefs, rocks & wrecks, saving you money & stress. ",
    },
    {
      question: 'Where is Sea Auckland located?',
      answer:
        "Sea Auckland is located with Bayswater Marina, on Auckland's North Shore. Being located in the marina allows our customers a smooth & effortless departure & return without battling beaches, boat ramps & breaking shore waves. Arrive by ferry (10 minute ferry ride) or car (25 minute drive). ",
    },
  ]
  return (
    <>
      <div>
        <h1>Sea Auckland's Purpose</h1>
        <p>We enjoy the water & want you to as well.</p>
        <p>
          We saw an opportunity to provide visitors & kiwi's the unique chance
          to blend the boundaries of recreational adventure & environmentally
          conscious tourism.
        </p>
        <p>
          The Auckland harbour is complex with reefs, rocks, speed zones & rules
          of the sea. By providing guided jet ski adventures, we ensure you
          maximise your riding time without needing to worry "Where am I now?"
        </p>
        <p>
          Sea Auckland's promise to you is our adventures provide you with the
          best value for money when it comes to exploring the Waitemata Harbour
          & Hauraki Gulf
        </p>
      </div>
      <div>
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
          Our fleet of modern Wave Runner Jet Ski's allow efficient, low impact
          enjoyment, whilst our Bayswater Marina location, limits our use of
          precious time, energy & resources.
        </p>
      </div>
      <div className="faq-section"></div>
    </>
  )
}

export default About
