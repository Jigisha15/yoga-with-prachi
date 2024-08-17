import gallery from '../../data/gallery'
import './Gallery.css'
import Gallerycard from '../../components/Gallerycard/Gallerycard'
import { useState } from 'react'


const Gallery = () => {
  
  const [name, setName] = useState(false)
  const [data, setData] = useState()

  const handleClick = (index) => {
    setData(index)
    console.log(data)
    setName(!name)
  }

  return (
    <div className="gallery_card">
      {gallery.map((data, index) => (
        <button onClick={() => handleClick(index)}>
          <Gallerycard
            key={index}
            source={data}
          />
        </button>
      ))}
      {name && (
        <div className="modal">
          <button
            onClick={handleClick}
            className="gallery_button"
          >
            X
          </button>
          <img
            src={gallery[data]}
            alt="Image ${data}"
          />
        </div>
      )}
    </div>
  )
}

export default Gallery
