import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { CSSProperties } from 'react'

function App() {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(client/public/bg.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }

  const contentStyle: CSSProperties = {
    flex: '1',
  }

  return (
    <>
      <div style={containerStyle} className="bg-container">
        <header>
          <Nav />
        </header>
        <main style={contentStyle}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
