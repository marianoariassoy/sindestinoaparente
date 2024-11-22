import { useState, useEffect } from 'react'
import Button from './Button'
import { Down, Up } from './icons'

const ComponentRight = ({ editions, texts, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenText, setIsOpenText] = useState(true)

  useEffect(() => {
    setIsOpenText(window.innerWidth >= 768)
  }, [])

  return (
    <div className='lg:fixed right-0 top-0 w-full lg:w-[33%] lg:pb-12 lg:h-screen overflow-y-auto bg-white z-40'>
      <div className='border-t border-black lg:mt-2 py-1 flex justify-between items-start px-3'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='hover:opacity-60'
        >
          {title}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='hover:opacity-60 text-xs lg:text-base'
        >
          {isOpen ? <Up /> : <Down />}
        </button>
      </div>

      {isOpen && (
        <div className='flex flex-col gap-y-3 max-w-xl mb-6 px-3'>
          {editions.map(item => (
            <Button
              key={item.id}
              data={item}
            />
          ))}
        </div>
      )}

      <div className='border-t border-black py-1 flex justify-between items-start px-3 lg:hidden'>
        <h3>Info</h3>
        <button
          onClick={() => setIsOpenText(!isOpenText)}
          className='hover:opacity-60 text-xs lg:text-base'
        >
          {isOpen ? <Up /> : <Down />}
        </button>
      </div>

      {isOpenText && (
        <div className='px-3'>
          {texts.map(item => (
            <div
              className='border-t border-black pt-3'
              key={item.id}
            >
              <div className='flex flex-col gap-y-3 leading-5 max-w-xl text-sm lg:text-base'>
                <h1 className='font-condensed text-2xl lg:text-3xl indent-9'>{item.title}</h1>
                {item.subtitle && <h2 className='pl-9 '>{item.subtitle}</h2>}
                <div className='indent-9 pb-6 whitespace-break-spaces leading-5'>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ComponentRight
