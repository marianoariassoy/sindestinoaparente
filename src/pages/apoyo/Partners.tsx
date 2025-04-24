import { BeatLoader } from 'react-spinners'
import useFetch from '../../hooks/useFetch'

const Partners = () => {
  const { data, loading } = useFetch(`/partners`)

  if (loading)
    <div className='px-3 mt-2'>
      <BeatLoader />
    </div>

  if (!data) return null

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-4 lg:pt-12 max-w-4xl'>
      {data.map((partner, index) => (
        <div
          key={index}
          className='p-8 border-b border-black flex items-center justify-center'
        >
          {partner.url ? (
            <a
              href={partner.url}
              target='_blank'
              rel='noreferrer'
              className='hover:opacity-70 transition-all'
            >
              <img
                src={partner.image}
                alt={partner.title}
                className='w-full h-full object-cover'
              />
            </a>
          ) : (
            <img
              src={partner.image}
              alt={partner.title}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Partners
