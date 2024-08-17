import './Navbar.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/ansh_academy_logo.jpeg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="" />
        ANSH ACADEMY
      </div>

      <ul className="right">
        <li>
          <a
            href="/"
            className="a-link"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="gallery"
            className="a-link"
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="contact"
            className="a-link"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="feedback"
            className="a-link"
          >
            Feedback
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
