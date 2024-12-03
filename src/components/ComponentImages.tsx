import { useState } from 'react'
import ItemModal from './ImageModal'
import Modal from './Modal'
import Labels from './Labels'

const ComponentLeft = ({ images, labels, edition }) => {
  const [currentImage, setCurrentImage] = useState(null)

  function generateRandomPadding(count: number) {
    return Array.from({ length: count }, () => ({
      left: Math.round(Math.random() * 120),
      right: Math.round(Math.random() * 120),
      top: Math.round(Math.random() * 120),
      bottom: Math.round(Math.random() * 50)
    }))
  }

  const padding = generateRandomPadding(labels.length)

  return (
    <>
      <div className='lg:w-[60%] relative'>
        <div className='flex flex-col'>
          {edition &&
            images
              .filter(item => item.edition === edition)
              .map(item => (
                <ItemModal
                  key={item.id}
                  src={item.image}
                  alt='Imagen'
                  setCurrentImage={setCurrentImage}
                />
              ))}
          {!edition &&
            images.map(item => (
              <ItemModal
                key={item.id}
                src={item.image}
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
