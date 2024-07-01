import './App.css';
// npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx';

import Gallery from './pages/Gallery/Gallery.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route
              Component={Gallery}
              path="/gallery"
            />
            <Route
              Component={Contact}
              path="/contact"
            />
            <Route
              Component={Home}
              path="/"
            />
            <Route Component={About} path='/about' />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App;
