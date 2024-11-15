import { useState } from 'react'
import Button from './Button'
import { Down, Up } from './icons'

const ComponentRight = ({ data, children, title }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='lg:w-[35%] pb-12 fixed right-0 h-screen overflow-y-scroll bg-white z-40'>
      <div className='border-t border-black mt-2 py-1 flex justify-between items-start px-6'>
        <h3>{title}</h3>
        <button
          onClick={handleButtonClick}
          className='hover:opacity-60'
        >
          {isOpen ? <Up /> : <Down />}
        </button>
      </div>
      {isOpen && (
        <div className='flex flex-col gap-y-3 max-w-xl mb-6 px-6 '>
          {data.map((item, index) => (
            <Button
              key={index}
              data={item}
            />
          ))}
        </div>
      )}
      <div className='px-6'>
        <div className='border-t border-black pt-5'>{children}</div>
      </div>
    </div>
  )
}

export default ComponentRight
