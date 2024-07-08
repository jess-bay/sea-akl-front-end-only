/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import React from 'react'
import AboutFAQ from './components/AboutFAQ'

interface Props {
  darkTheme: boolean
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutFAQ />} />
    </Route>
  )
)

export default router
