import React from 'react'
import Nav from './Nav'
import Home from './Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
