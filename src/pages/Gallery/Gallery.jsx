import gallery from '../../data/gallery'
import './Gallery.css'
import Gallerycard from '../../components/Gallerycard/Gallerycard'
// import { useEffect, useState } from 'react'

const Gallery = () => {
  // const [visible, setVisible] = useState()
  // const [photo, setPhoto] = useState(false)

  // const handleClick = (index) => {
  //   setVisible(!visible)
  //   setPhoto(index)
  // }

  // useEffect(() => {
  //   if (photo) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.oberflow = 'auto'
  //   }
  // }, [photo])

  // const handleOpenModal = (e) => {
  //   // setPhoto(!photo) photo=rtue
  //   setVisible(!visible)
  //   setPhoto(!photo)
  //   setPhoto(e)
  // }

  // const handleCloseModal = () => {
  //   setVisible(!visible)
  //   setPhoto(!photo)
  // }

  // return (
  //   <div className={visible ? 'gallery_card_old' : 'gallery_card'}>
  //     {gallery.map((data, index) => (
  //       <button
  //         className="gallery-button"
  //         onClick={() => handleClick(index)}
  //       >
  //         <Gallerycard
  //           key={index}
  //           source={data}
  //         />
  //       </button>
  //     ))}
  //     {visible && (
  //       <div className="photo">
  //         <button onClick={handleClick}>X</button>
  //         <img
  //           src={gallery[photo]}
  //           alt=""
  //         />
  //       </div>
  //     )}
  //   </div>
  // )

  return (
    <div className="gallery-container">
      <div className="gallery-image">
        {gallery.map((data, index) => (
          <Gallerycard
            key={index}
            source={data}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
