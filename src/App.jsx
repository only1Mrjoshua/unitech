import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'        // we'll move the existing main page to a Home component
import DrillingMeasurements from './pages/DrillingMeasurements'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/drilling-measurements" element={<DrillingMeasurements />} />
      </Routes>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  )
}

export default App