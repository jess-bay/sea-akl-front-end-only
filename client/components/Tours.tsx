import { Link } from 'react-router-dom'

function Tours() {
  return (
    <>
      <div className="city-tour">
        <h3>City</h3>
        <p>
          Discover Auckland's unique harbour asset all within viewing distance
          of downtown Auckland City. This tour will have you experience the
          unforgettable feeling of riding beneath the Auckland Harbour Bridge
          with a photo to remember it by. Then, we find ourselves a calm part of
          the harbour to enjoy the jetskis themselves.
        </p>
        <p>
          Perfect for a first time rider or those looking for a quick, fast
          blast on our Wave Runner Jetskis.
        </p>
        <p>
          <strong>Duration: 1 Hour</strong>
        </p>
      </div>
      <div className="harbour-tour">
        <h3>Harbour</h3>
        <p>
          This journey stays within the harbour limits enjoying views of
          downtown Auckland city & riding beneath the harbour bridge. Within
          minutes we pass million dollar, Herne Bay mansions & Chelsea Sugar
          Works making our way north towards the upper harbour region. This tour
          includes long, straight, high-speed runs with enough time to find come
          calm water & really enjoy the Wave Runner Jetskis.
        </p>
        <p>
          Perfect for any riding experience who wish to take on the epic
          'Bridge-to-Bridge' journey.
        </p>
        <p>
          <strong>Duration: 1.5 Hours</strong>
        </p>
      </div>
      <div className="waiheke-tour">
        <h3>Waiheke</h3>
        <p>
          It's time to tick off "the dream" of riding your very own jetski to
          the sanctuary of Waiheke Island. This is an express ride to Oneroa
          Beach where we land and sink our toes into the sand of this world
          famous island destination. From here you have 1 hour for self
          exploration of Oneroa beach. Enough time for a swim, sunbathe or a
          bite to eat! Once you've enjoyed Waiheke's visitor hotspot, we jump
          back on our jetski's for a scenic ride back enjoying the approach to
          Auckland City.
        </p>
        <p>
          <strong>Duration: 3.5 Hours</strong>
        </p>
      </div>
      <div className="gulf-tour">
        <h3>Gulf</h3>
        <p>
          Designed to experience the very best of Auckland 's inner Hauraki
          Marine Park, your guide takes you to arguably the best islands around.
          Motuihe Island provides white sand beach backdrops with time for a
          swim & views out into the Pacific Ocean. Follow Rangitoto Island's 600
          year old volcanic coastline riding past the iconic Rangitoto baches
          with a stop at the jaw-dropping Rangitoto Sand Bar for true, 360
          degree views of Volcano Peaks & City Skyline. An action packed trip
          guaranteed to be good for the soul.
        </p>
        <p>
          <strong>Duration: 3.5 Hours</strong>
        </p>
      </div>
      <div className="sunset-tour">
        <h3>Sunset</h3>
        <p>
          The Waitemata Harbour shows a different side once the sun goes down &
          the city lights begin to wake. You will pilot your own jetskis across
          the face of downtown Auckland, beneath the Harbour Bridge & along the
          cliff top mansions of Herne Bay. We then regroup & experience the
          setting sun as it lowers in the west and shines back on the City
          Skyline.
        </p>
        <p>
          Heading home, we navigate the waters at dusk, with The Harbour Bridge
          Lights in full effect. A truely magical ride & unique experience only
          found at Sea Auckland.
        </p>
        <p>These tours have a maximum 2 jet ski limit to ensure safety.</p>
        <p>
          <strong>Duration: 1 Hour</strong>
        </p>
      </div>
      <div className="general-info">
        <h3>General Information</h3>
        <ul>
          <li>
            All jetski trips are under the supervision of Sea Auckland guides.
          </li>
          <li>No experience is necessary.</li>
          <li>
            1 or 2 riders per ski - 200kg maximum combined weight (strictly
            enforced).
          </li>
          <li>
            A brief yet detailed operational & safety lesson is provided before
            you depart.
          </li>
          <li>
            All durations include a practice ride for guide to ensure you are
            comfortable & confident.
          </li>
          <li>Minimum age to drive jetski is 16 years old.</li>
          <li>
            Minimum age to be a passenger is 8 years old with legal guardian.
          </li>
          <li>Waterproof spray tops available for hire $20 each. </li>
          <li>
            <strong>
              Auckland's marine environment is a dynamic place. All trips are
              subject to weather conditions and should the weather change when
              on the tour, your guide has the right to alter any routes, times
              or destinations. This is for the safety of all involved & to
              ensure maximum enjoyment.
            </strong>
          </li>
        </ul>
        <Link to="/about">FAQ's + Terms & Conditions</Link>
      </div>
    </>
  )
}

export default Tours
