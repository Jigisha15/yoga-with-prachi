import './Talkabout.css'

const Talkabout = ({ source, talk_title }) => {
  return (
    <div className="talkabout">
      <img
        src={source}
        alt=""
      />
      <h1>{talk_title}</h1>
    </div>
  )
}

export default Talkabout
