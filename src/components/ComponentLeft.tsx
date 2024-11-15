import { useState } from 'react'
import ItemModal from './ImageModal'
import Modal from './Modal'

const ComponentLeft = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(null)

  return (
    <>
      <div className='lg:w-[65%] relative'>
        <div className='flex flex-col'>
          {images.map((image, index) => (
            <ItemModal
              key={index}
              src={image}
              alt='Imagen'
              setCurrentImage={setCurrentImage}
            />
          ))}
        </div>
      </div>

      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      )}
    </>
  )
}

export default ComponentLeft
