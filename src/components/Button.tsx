import { useState } from 'react'
import { Right } from './icons'
import ImageComponent from './Image'

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
        <div className={`w-6 transition-all ${isOpen ? 'text-2xl pt-2' : 'pt-3'}`}>
          <Right />
        </div>
        <div className='flex-1 flex flex-col'>
          <button
            className='flex flex-col text-left lg:flex-row gap-x-1 items-start lg:items-end hover:pl-4 underline-offset-2 transition-all'
            onClick={handleButtonClick}
          >
            <h1 className='font-condensed text-xl lg:text-3xl'>{data.title}</h1>
            {data.subtitle && !isOpen && (
              <>
                <span className='hidden lg:block'>/</span>
                <span className='flex-1 font-sans text-sm lg:text-base'>{data.subtitle}</span>
              </>
            )}
          </button>

          {isOpen && (
            <div className='flex flex-col gap-y-3'>
              <div>{data.subtitle}</div>

              {data.image && (
                <div>
                  <ImageComponent
                    src={data.image}
                    alt={data.title}
                  />
                </div>
              )}

              <div className='mb-6 leading-5 whitespace-break-spaces'>{data.description}</div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default AcercaDeItem