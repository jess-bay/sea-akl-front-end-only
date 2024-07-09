import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import AboutFAQ from './components/AboutFAQ.tsx'
import Tours from './components/Tours.tsx'
import PestFree from './components/PestFree.tsx'
import Reviews from './components/Reviews.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<AboutFAQ />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/pestfree" element={<PestFree />} />
      <Route path="/reviews" element={<Reviews />} />
    </Route>
  )
)

export default router
