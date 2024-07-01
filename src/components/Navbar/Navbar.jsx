import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="right">TULUA</div>

          <ul className="left">
              <li><a href="/" className='a-link'>Home</a></li>
              <li><a href="gallery" className='a-link'>Gallery</a></li>
              <li><a href="contact" className='a-link'>Contact</a></li>
          </ul>
    </div>
  )
}

export default Navbar
