import './Contact.css'
// import { Link } from 'react-router-dom'

// import { SlSocialInstagram } from 'react-icons/sl'
// import { SlSocialFacebook } from 'react-icons/sl'
// import { SlSocialYoutube } from 'react-icons/sl'
// import { TiMail } from 'react-icons/ti'
// import { PiPhoneBold } from 'react-icons/pi'
// import { TiLocationOutline } from 'react-icons/ti'
// import { AiOutlineClockCircle } from 'react-icons/ai'

// import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h1 className="contact-title">Contact Me</h1>
      </div>

      <div className="contact-right">
        <button className="contact-buttons">DM Me on Instagram</button>
        <button className="contact-buttons">WhatsApp Me</button>
        <button className="contact-buttons">Email Me</button>
      </div>
    </div>
  )
}

export default Contact
