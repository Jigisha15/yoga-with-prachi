import './Home.css'
import Homecard from '../../components/Homecard/Homecard'
import homecard from '../../data/homecard.js'

import Textcar from '../../components/Textcar/Textcar.jsx'

import Smallcard from '../../components/Smallcard/Smallcard.jsx'
import smallcard from '../../data/smallcard.js'

import gyanmudra from '../../assets/gyanmudra.jpg'
import padmasana from '../../assets/padmasana.jpg'
import yogapose4 from '../../assets/yogapose4.jpg'

const Home = () => {
  const handleInsta = () => {
    const instaURL = `https://www.instagram.com/yogawithprachii/`
    window.open(instaURL, '_blank')
  }

  const handleWhatsapp = () => {
    const whatsappURL = `https://wa.me/8369540213?text=Hi Prachi`
    window.open(whatsappURL, '_blank')
  }

  const handleMail = () => {
    const mailURL = `https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzDDMRPkngklpwVwhMfHBSKNjcrxLlDfRdrTCGtzpBCwZsVBwllBqDHJPdWnRFcTGBcRKdK`
    window.open(mailURL, '_blank')
  }

  return (
    <div className="home">
      <div className="landing-img">
        <div className="back">
          <img
            className="back-left"
            // src="https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss-1600x900.jpg"
            src={padmasana}
            alt=""
          />
          <div className="back-right">
            <img
              className="back-right-img"
              // src="https://i.pinimg.com/564x/92/b4/b9/92b4b91bb2413e561bb74cdbf1dcdfc5.jpg"
              src={gyanmudra}
              alt=""
            />
          </div>
        </div>
        <div className="front">
          <p>
            <span>A yoga studio supporting </span>
            <br />
            <span>women in wellness</span>
          </p>
          {/* previously declared as button */}
          <a href="register">Register Now</a>
        </div>
      </div>

      <div className="short-div">
        <div className="sd-left">OUR CLASSES</div>
        <div className="sd-middle"></div>
        <div className="sd-right">EXPLORE MORE</div>
      </div>

      <div className="home-cards-div">
        {homecard.map((data, index) => (
          <Homecard
            key={index}
            card_image={data.card_image}
            card_type={data.card_type}
            card_text={data.card_text}
          />
        ))}
      </div>

      <Textcar />

      <div className="next-card">
        <img
          className="next-card-left"
          // src="https://static.toiimg.com/photo/81227882.cms"
          src={yogapose4}
          alt=""
        />
        <div className="next-card-right">
          <h1>Training</h1>
          <p>
            Yoga training delves deeper than just postures. It explores
            philosophy, anatomy, and breathwork to refine your practice. This
            holistic approach fosters not only physical strength but also mental
            clarity and inner peace.
          </p>
        </div>
      </div>

      {/* <div className="open-front">
        <p>
          <span>A yoga studio supporting </span>
          <br />
          <span>women in wellness</span>
        </p>
        <button>Register Now</button>
      </div> */}

      <div className="smallcards-display">
        {smallcard.map((data, index) => (
          <Smallcard
            key={index}
            source={data}
          />
        ))}
      </div>

      <div className="contact">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-bottom">
          <button
            className="contact-buttons"
            onClick={handleInsta}
          >
            DM Me on Instagram
          </button>
          <button
            className="contact-buttons"
            onClick={handleWhatsapp}
          >
            Text Me On WhatsApp
          </button>
          <button
            className="contact-buttons"
            onClick={handleMail}
          >
            Email Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
