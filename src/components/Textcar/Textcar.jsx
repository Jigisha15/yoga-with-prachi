import './Textcar.css'
import textcar from '../../data/textcar'

import { useState } from 'react'

import { FaArrowRight } from 'react-icons/fa6'
import { FaArrowLeft } from 'react-icons/fa6'
import { GoDot } from 'react-icons/go'
import { GoDotFill } from "react-icons/go";

const Textcar = () => {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent(current === textcar.length - 1 ? 0 : current + 1);
  }

  const handlePrev = () => {
    setCurrent(current === 0 ? textcar.length - 1 : current - 1);
  }

  const handleClick = (i) => {
    setCurrent(i)
  }

  return (
    <div className="carousel">
      <div className="upper-carousel">
      <button onClick={handlePrev} className='click-buttons'><FaArrowLeft/></button>
      <div className="content">
        <p className="content-type">{textcar[current].car_intro}</p>
        <p className="content-text">{textcar[current].car_text}</p>
      </div>
      <button onClick={handleNext} className='click-buttons'><FaArrowRight/></button>
      </div>
      <div className="lower-carousel">
        {textcar.map((d, i) => (
          <button onClick={()=>handleClick(i)} className='textcar-button'><GoDot/></button>
        ))}
      </div>
    </div>
  )

}

export default Textcar
