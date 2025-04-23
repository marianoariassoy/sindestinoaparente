import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import ItemModal from './ImageModal'
import Modal from './Modal'
import LabelsItems from './LabelsItems'

const Presentation = ({ item, lan }: { item: number; lan: string }) => {
  const { data, loading } = useFetch(`/items/${item}/images/${lan}`)
  const [currentImage, setCurrentImage] = useState(null)

  if (loading)
    return (
      <div className='px-3'>
        <BeatLoader />
      </div>
    )

  if (!data) return null

  return (
    <>
      <div className='pb-4'>
        {data.map(item =>
          item.image ? (
            <ItemModal
              key={item.id}
              src={item.image}
              title={item.title}
              alt='Imagen'
              setCurrentImage={setCurrentImage}
            />
          ) : (
            <LabelsItems
              key={item.id}
              text={item.title}
            />
          )
        )}
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
