import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-p">
        Yoga is not about self-improvement, it's about self-acceptance
      </p>

      <div className="footer-buttons">
        <a href='about' className='footer-links'>About Us</a>
        <a href='contact' className='footer-links'>Contact Us</a>
      </div>

      <div className="footer-devs">
        <p>
          Developed by <a href="https://github.com/Jigisha15" target='_blank'>Jigisha</a> &
          <a href="">Saachi</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
