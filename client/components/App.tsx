import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
