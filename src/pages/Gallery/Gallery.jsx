import gallery from '../../data/gallery'
import './Gallery.css'
import Gallerycard from '../../components/Gallerycard/Gallerycard'


const Gallery = () => {
  return (
    <div className="gallery_card">
      {gallery.map((data, index) => (
        <Gallerycard key={index} source={data} />
      ))}
    </div>
  )
}

export default Gallery
