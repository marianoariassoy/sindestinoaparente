import { useState } from 'react'
import { Right } from '../components/icons'
import ImageComponent from '../components/Image'

interface Props {
  data: {
    title: string
    subtitle: string
    description: string
    image: string
  }
}

const AcercaDeItem = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <article className='text-base'>
      <div className='flex gap-x-3'>
        <div className={` w-[22px] transition-all ${isOpen ? 'text-2xl pt-2' : 'pt-3'}`}>
          <Right />
        </div>
        <div className='flex-1 flex flex-col gap-y-6'>
          <button
            className='flex text-left gap-x-1 items-end hover:pl-4 underline-offset-2 transition-all'
            onClick={handleButtonClick}
          >
            <h1 className='font-condensed text-3xl'>{data.title}</h1>
            <span>/</span>
            <span className='flex-1'>{data.subtitle}</span>
          </button>

          {isOpen && (
            <div className='flex flex-col gap-y-3'>
              <div>
                <ImageComponent
                  src={data.image}
                  alt={data.title}
                />
              </div>
              <div className='mb-6 '>
                <p>{data.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default AcercaDeItem
