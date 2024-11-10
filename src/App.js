import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

import Gallery from './pages/Gallery/Gallery.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Enquiry from './pages/Enquiry/Enquiry.jsx'
import Register from './pages/Register/Register.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route
              Component={Home}
              path="/"
            />
            <Route
              Component={Gallery}
              path="/gallery"
            />
            <Route
              Component={Contact}
              path="/contact"
            />
            <Route
              Component={About}
              path="/about"
            />
            <Route
              Component={Enquiry}
              path="/enquiry"
            />
            <Route
              Component={Register}
              path="/register"
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App
