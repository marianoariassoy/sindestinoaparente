import { useState, useEffect } from 'react'
import Button from './Button'
import { Down, Up } from './icons'

const ComponentRight = ({ data, children, topTitle, title, description }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenText, setIsOpenText] = useState(true)

  useEffect(() => {
    setIsOpenText(window.innerWidth >= 768)
  }, [])

  return (
    <div className='lg:fixed right-0 top-0 w-full lg:w-[33%] lg:pb-12 lg:h-screen overflow-y-auto bg-white z-40'>
      <div className='border-t border-black lg:mt-2 py-1 flex justify-between items-start px-3'>
        <h3>{topTitle}</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='hover:opacity-60 text-xs lg:text-base'
        >
          {isOpen ? <Up /> : <Down />}
        </button>
      </div>

      {isOpen && (
        <div className='flex flex-col gap-y-3 max-w-xl mb-6 px-3'>
          {data.map((item, index) => (
            <Button
              key={index}
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
          <div className='border-t border-black pt-3'>
            <div className='flex flex-col gap-y-3 leading-5 max-w-xl text-sm lg:text-base'>
              <h1 className='font-condensed text-2xl lg:text-3xl indent-9'>{title}</h1>
              {description && <h2 className='pl-9'>{description}</h2>}
              <div className='[&>p]:indent-9 pb-6 text-sm'>{children}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ComponentRight
