import { CSSProperties } from 'react'

function PestFree() {
  const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '50%',
    margin: '20px auto',
  }

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '100px',
  }

  const imageStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
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
          <h1>Pest Free Hauraki Gulf</h1>
          <h3>
            We follow and support the biosecurity requirements set out by
            Auckland Council and Department of Conservation. Therefore, we ask
            all passengers thoroughly check and clean their gear for pests prior
            to arrival. For more information click{' '}
            <a href="https://www.aucklandcouncil.govt.nz/environment/what-you-can-do-for-environment/Pages/visiting-hauraki-gulf-islands.aspx">
              here
            </a>
          </h3>
        </div>
        <img
          src="client/public/pestfreesticker.png"
          alt="Pest Free Sticker On Jet Ski"
          style={{ margin: '10px', width: '700px', height: 'auto' }}
        />
      </div>
      <div style={imageContainerStyle}>
        <div style={imageStyle}>
          <img
            src="client/public/pestfree1.png"
            alt="Pest Free Hauraki Notice"
            style={{ width: 'auto', height: '1000px' }}
          />
        </div>
        <div style={imageStyle}>
          <img
            src="client/public/pestfree2.png"
            alt="Pest Free Hauraki Notice"
            style={{ width: 'auto', height: '1000px' }}
          />
        </div>
      </div>

      <div style={containerStyle}>
        <div style={textStyle}>
          <h3>Why You Need To Check Your Gear:</h3>
          <p>
            The Hauraki Gulf is a nationally-significant marine park. Many of
            the islands of the Gulf are pest free, or partially pest free. This
            means they are now home to some of New Zealand’s rarest and most
            endangered species – eg tuatara, takahe, shore plover and kiwi. The
            islands are also recovering naturally as birds reintroduce
            themselves to these safe havens. It is important to keep them pest
            free – and we need your help!
          </p>
          <p>
            Pest animals and plants can invade our islands by stowing away on or
            in your footwear, gear or boat. Rats can squeeze through a 12 mm gap
            and mice can squeeze through a 7 mm gap. Insects could hide in your
            bag, and weeds, seeds and soil could cling to your clothing and
            shoes.
          </p>
          <p>Pests threaten New Zealand's native wildlife. Some examples: </p>
          <ul>
            <li>Rats eat birds, eggs, reptiles and insects.</li>
            <li>Mice prey on insects and eat small birds and reptiles.</li>
            <li>
              Argentine ants can reach large numbers and have a big appetite
              killing our native insects, skinks, geckos and baby birds.
            </li>
            <li>
              Plague skinks compete with native lizards and other animals for
              food and habitat and have displaced our native skinks on the
              mainland.
            </li>
            <li>Soil can carry plant diseases such as kauri dieback.</li>
            <li>
              Weed seeds can become a weed forest and smother native plants
            </li>
          </ul>
          <h3>Prepare For Your Trip By Being Alert For These Threats.</h3>
          <h3>Please:</h3>
          <ul>
            <li>
              Make sure all food is packed and sealed in plastic containers with
              lid. Ensure cardboard boxes are closed and taped – there must be
              no opportunity for an unwanted pest to access the container/box in
              transit.
            </li>
            <li>Ensure all footwear and gear is clean and free of soil.</li>
            <li>
              Thoroughly check any camping or overnight gear for stowaways. Gear
              that has been stored away is high risk.
            </li>
            <li>
              Thoroughly check seedlings, potting mix or plant matter to ensure
              there are no hitch-hikers.
            </li>
            <li>
              Seal up your gear/food as soon as you have finished packing and
              leave it closed until you reach your destination.
            </li>
          </ul>
          <p>
            Without your co-operation your trip may not be able to take place,
            so if you have any doubts or questions about biosecurity, please ask
            us.
          </p>
          {/* include video: https://www.youtube.com/watch?v=shfLAo1faLM */}
        </div>
      </div>
    </>
  )
}

export default PestFree
