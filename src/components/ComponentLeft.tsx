import { useState } from 'react'
import ItemModal from './ImageModal'
import Modal from './Modal'
import Labels from './Labels'

const ComponentLeft = ({ images, labels }: { images: string[]; labels }) => {
  const [currentImage, setCurrentImage] = useState(null)

  function generateRandomPadding(count: number) {
    return Array.from({ length: count }, () => ({
      left: Math.round(Math.random() * 80),
      right: Math.round(Math.random() * 80),
      top: Math.round(Math.random() * 80),
      bottom: Math.round(Math.random() * 50)
    }))
  }

  const padding = generateRandomPadding(labels.length)

  return (
    <>
      <div className='lg:w-[60%] relative'>
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

        <Labels
          labels={labels}
          padding={padding}
        />
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
