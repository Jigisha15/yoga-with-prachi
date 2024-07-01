import './About.css'
import { Link } from 'react-router-dom'

import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'

import Valuecard from '../../components/Valuecard/Valuecard'
import valuecard from '../../data/valuecard'

import Talkabout from '../../components/TalkAbout/Talkabout'
import talkabout from '../../data/talkabout'

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <img
          src="https://i.pinimg.com/564x/bb/ce/c4/bbcec44b3e0124241eb5c21e9f0efbd1.jpg"
          alt=""
          className="about-image"
        />
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            facilis sed eum inventore modi nulla aut reprehenderit sit! Possimus
            impedit placeat esse aut, atque fuga suscipit voluptatum iste
            necessitatibus sed ipsa earum nobis explicabo quas amet
            exercitationem ratione commodi accusantium?
          </p>
          <h2>Check Out my Social Media Handles</h2>
          <div className="social-media">
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
                size={28}
                style={{ marginTop: '2px' }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="values">
        <h1>My Values</h1>
        <div className="value-cards">
          {valuecard.map((data, index) => (
            <Valuecard
              number={index + 1}
              value_title={data.value_title}
              value_text={data.value_text}
            />
          ))}
        </div>
      </div>

      <div className="talkabout-cards">
        <h1>I Talk About...</h1>
        <div className="talk-about-cards">
          {talkabout.map((data, index) => (
            <Talkabout
              key={index}
              source={data.source}
              talk_title={data.talk_title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
