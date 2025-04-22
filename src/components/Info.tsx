import { useState, useEffect } from 'react'
import Category from './Category'
import { Down, Up } from './icons'
import HTML from '../hooks/useHTML'
import useFetch from '../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

const ComponentRight = ({ section, item, lan }: { section: number; item: number; lan: string }) => {
  const { data: categories, loading: categoriesLoading } = useFetch(`/categories/${section}/${lan}`)
  const { data, loading } = useFetch(`/items/${item}/details/${lan}`)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(window.innerWidth >= 768)
  }, [])

  if (categoriesLoading)
    return (
      <div className='border-t border-black lg:mt-2 py-3 px-3'>
        <BeatLoader />
      </div>
    )
  if (!categories) return null

  return (
    <>
      <div className='border-t border-black lg:mt-2 py-1 flex justify-between items-start px-3 mb-2'>
        {lan === 'ESP' ? 'Ediciones' : 'Editions'}
      </div>

      <div className='flex flex-col  max-w-xl mb-6 px-3'>
        {categories.map(item => (
          <Category
            key={item.id}
            data={item}
            lan={lan}
          />
        ))}
      </div>

      <div className='border-t border-b border-black py-1 flex justify-between items-center px-3 lg:hidden'>
        <h3>{lan === 'ESP' ? 'Info' : 'Info'}</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='hover:opacity-60 text-xs lg:text-base'
        >
          {isOpen ? <Up /> : <Down />}
        </button>
      </div>

      {isOpen && (
        <div className='px-3'>
          {loading ? (
            <div className='border-t border-black pt-3'>
              <BeatLoader />
            </div>
          ) : (
            <div className='lg:border-t border-black pt-3'>
              <div className='flex flex-col gap-y-3 leading-5 max-w-xl text-sm lg:text-base'>
                <h1 className='font-condensed text-2xl lg:text-3xl'>{data.title}</h1>
                {data.subtitle && <h2 className='leading-5 whitespace-break-spaces pl-6'>{data.subtitle}</h2>}

                <div className='pb-6 leading-5'>
                  <HTML text={data.description} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ComponentRight
