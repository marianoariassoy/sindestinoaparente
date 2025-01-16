import { useState } from 'react'
import ItemModal from './ImageModal'
import Modal from './Modal'
import LabelsItems from './LabelsItems'

const ComponentLeft = ({ images, edition }) => {
  const [currentImage, setCurrentImage] = useState(null)

  return (
    <>
      <div className='lg:w-[60%] relative'>
        <div className='flex flex-col'>
          {edition &&
            images
              .filter(item => item.edition === edition)
              .map(item =>
                item.image ? (
                  <ItemModal
                    key={item.id}
                    src={item.image}
                    title={item.text}
                    alt='Imagen'
                    setCurrentImage={setCurrentImage}
                  />
                ) : (
                  <LabelsItems
                    key={item.id}
                    text={item.text}
                  />
                )
              )}
          {!edition &&
            images.map(item =>
              item.image ? (
                <ItemModal
                  key={item.id}
                  src={item.image}
                  title={item.text}
                  alt='Imagen'
                  setCurrentImage={setCurrentImage}
                />
              ) : (
                <LabelsItems
                  key={item.id}
                  text={item.text}
                />
              )
            )}
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
