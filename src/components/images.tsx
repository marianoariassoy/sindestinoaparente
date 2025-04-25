import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import ItemModal from './ImageModal'
import Modal from './Modal'
import LabelsItems from './LabelsItems'
import HTML from '../hooks/useHTML'

const Presentation = ({ item, lan }: { item: number; lan: string }) => {
  const { data, loading } = useFetch(`/items/${item}/images/${lan}`)
  const [currentImage, setCurrentImage] = useState(null)

  if (loading)
    return (
      <div className='flex w-full justify-center'>
        <BeatLoader />
      </div>
    )

  if (!data) return null

  return (
    <>
      <div className='pb-12'>
        {data.map(item => (
          <article
            key={item.id}
            className='flex flex-col gap-y-8 text-center py-4 lg:py-8'
          >
            {item.title && <h1 className='font-condensed text-2xl lg:text-3xl underline'>{item.title}</h1>}
            {item.image && (
              <div className='flex justify-center'>
                <ItemModal
                  key={item.id}
                  src={item.image}
                  title={item.title}
                  alt='Imagen'
                  setCurrentImage={setCurrentImage}
                />
              </div>
            )}
            {item.note ? (
              <LabelsItems text={item.text} />
            ) : (
              item.text && (
                <div className='px-4 lg:px-12'>
                  <HTML text={item.text} />
                </div>
              )
            )}
          </article>
        ))}
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

export default Presentation
