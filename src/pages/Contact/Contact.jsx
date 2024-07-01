import './Contact.css'
import { Link } from 'react-router-dom'

import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { TiMail } from 'react-icons/ti'
import { PiPhoneBold } from 'react-icons/pi'
import { TiLocationOutline } from 'react-icons/ti'
import { AiOutlineClockCircle } from 'react-icons/ai'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>
          Feel free to contact us at time. We will get back to you as soon as we
          can!
        </p>

        <form
          action=""
          className="form"
        >
          <div className="form-class">
            <input
              type="text"
              className="inputs"
              required
            />
            <label htmlFor="">Name</label>
          </div>
          <div className="form-class">
            <input
              type="email"
              className="inputs"
              required
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="form-class">
            <input
              type="number"
              className="inputs"
              required
            />
            <label htmlFor="">Contact Number</label>
          </div>
          <div className="form-class">
            <textarea
              name=""
              id=""
              className="inputs"
              required
            ></textarea>
            <label htmlFor="">Message</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-right">
        <div className="contact-social-media">
          <Link
            to="https://www.instagram.com/"
            className="social-links"
          >
            <SlSocialInstagram />
          </Link>
          <Link
            to="https://www.facebook.com/"
            className="social-links"
          >
            <SlSocialFacebook />
          </Link>
          <Link
            to="https://www.youtube.com/"
            className="social-links"
          >
            <SlSocialYoutube
              size={25}
              style={{ marginTop: '2px' }}
            />
          </Link>
        </div>
      </div>
      <div className="contact-info">
        <h1>Information</h1>
        <ul>
          <li>
            <Link
              to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlJWKvrWHvxtKnxnclWhQmBpvrXhrxmrNJLFfFqVnLZrbzssnZhlVJLKTGPWGrgBhTtzML"
              target='blank'
              className="contact-icons"
            >
              <TiMail size={23} />
              jigisha@email.com
            </Link>
          </li>
          <li>
            <Link className="contact-icons">
                <PiPhoneBold size={23} />
                8850232785
            </Link>
          </li>
          <li>
            <Link
              className="contact-icons"
              to="https://www.google.com/maps/place/Manavta+Hospital/@19.3089163,72.8596458,16.5z/data=!4m6!3m5!1s0x3be7b028c4c00b9b:0xd035792bdbbffa3!8m2!3d19.3087257!4d72.8611613!16s%2Fg%2F1ptwk0zsq?entry=ttu"
              target="blank"
            >
              <TiLocationOutline size={23} />
              Mira-Bhayander
            </Link>
          </li>
          <li>
            <Link className="contact-icons">
              <AiOutlineClockCircle size={23} />
              9am - 8pm
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
