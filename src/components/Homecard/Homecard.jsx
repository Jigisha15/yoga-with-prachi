import './Homecard.css'

const Homecard = ({ card_image, card_type, card_text }) => {
    
  return (
    <div className="homecard">
      <img
        src={card_image}
        alt=""
      />
      <div className="home-card-text">
        <h1>{card_type}</h1>
        <p>{card_text}</p>
        <button>Practice Now</button>
      </div>
    </div>
  )
}

export default Homecard
