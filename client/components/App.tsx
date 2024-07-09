import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { CSSProperties } from 'react'

function App() {
  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }

  const contentStyle: CSSProperties = {
    flex: '1',
  }

  return (
    <>
      <div style={containerStyle}>
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
