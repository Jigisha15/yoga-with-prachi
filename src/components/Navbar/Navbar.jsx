import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        ANSH ACADEMY
        {/* <Link to="/">ANSH ACADEMY</Link> */}
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
            href="about"
            className="a-link"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="enquiry"
            className="a-link"
          >
            Enquiry
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
