import gallery from '../../data/gallery'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="gallery">
      {gallery.map((data, index) => (  
        <img
        key={index}
        className='yoga-img'
        src={data}
        alt=""
        />
      ))}
    </div>
  )
}

export default Gallery
