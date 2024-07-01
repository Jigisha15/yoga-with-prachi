import './Valuecard.css'

const Valuecard = ({number, value_title, value_text}) => {
  return (
    <div className='valuecard'>
          <h1>{ number }</h1>
          <h2>{ value_title }</h2>
          <p>{ value_text }</p>
    </div>
  )
}

export default Valuecard
