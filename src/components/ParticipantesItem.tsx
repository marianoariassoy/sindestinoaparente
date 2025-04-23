import { useState } from 'react'
import Image from './Image'

const ParticipantesItem = ({ item }: { item: { id: number; title: string; text: string; image: string } }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li key={item.id}>
      <button
        className={`pl-8 ${isOpen ? 'underline' : 'hover:underline'} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title}
      </button>

      {isOpen && (
        <div className='my-4 flex flex-col gap-y-2'>
          <div className='w-full max-w-sm'>
            <Image
              src={item.image}
              alt={item.title}
            />
          </div>
          <p className='text-sm leading-4 whitespace-break-spaces'>{item.text}</p>
        </div>
      )}
    </li>
  )
}

export default ParticipantesItem
