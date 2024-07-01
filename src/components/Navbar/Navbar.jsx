import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="right">
        {/* <Link to='/'>ANSH ACADEMY</Link> */}
        ANSH ACADEMY
      </div>

      <ul className="left">
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
      </ul>
    </div>
  )
}

export default Navbar
