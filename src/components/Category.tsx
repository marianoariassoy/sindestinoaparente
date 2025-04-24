import { useState } from 'react'
import { Right } from './icons'
import useFetch from '../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import { Link, useLocation } from 'wouter'
import Participantes from './Participantes'

interface Props {
  data: {
    id: number
    title: string
  }
  lan: string
}

const AcercaDeItem = ({ data, lan }: Props) => {
  const { data: items, loading: itemsLoading } = useFetch(`/categories/${data.id}/items/${lan}`)
  const [isOpen, setIsOpen] = useState(false)
  const [location] = useLocation()
  const id = location.split('/')[2]

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className='text-base'>
      <div className='flex gap-x-3 items-center'>
        <div className={`w-6 transition-all ${isOpen ? 'text-2xl' : ''}`}>
          <Right />
        </div>
        <div className='flex-1 flex flex-col'>
          <button
            className='flex flex-col text-left lg:flex-row gap-x-1 items-start lg:items-end lg:hover:pl-4 underline-offset-2 transition-all'
            onClick={handleButtonClick}
          >
            <h1 className='font-condensed text-xl lg:text-3xl'>{data.title}</h1>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='pl-9'>
          {itemsLoading ? (
            <BeatLoader />
          ) : (
            <ul className='flex flex-col my-2'>
              {items.map(item => (
                <li key={item.id}>
                  <Link
                    to={`/${item.section}/${item.id}`}
                    className={`hover:underline ${+id === item.id ? 'underline' : ''}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  )
}

export default AcercaDeItem
