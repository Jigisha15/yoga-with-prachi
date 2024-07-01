import './Gallerycard.css'

const Gallerycard = ({source}) => {
  return (
    <div className="gallerycard">
      <img
        src={source}
        alt=""
      />
    </div>
  )
}

export default Gallerycard
