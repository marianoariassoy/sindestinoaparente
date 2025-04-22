import useFetch from '../hooks/useFetch'
import { BeatLoader } from 'react-spinners'

const Info = ({ item, lan }: { item: number; lan: string }) => {
  const { data, loading } = useFetch(`/items/${item}/details/${lan}`)

  if (loading)
    return (
      <div className='p-4 lg:p-8 my-8'>
        <BeatLoader />
      </div>
    )

  if (!data) return null

  return (
    <section className='p-4 lg:p-8 flex flex-col gap-y-8 my-8'>
      <div>
        <h1 className='underline text-2xl lg:text-3xl text-center uppercase'>{data.title}</h1>
        {data.subtitle && <h2 className='underline text-xl lg:text-3xl text-center'>{data.subtitle}</h2>}
      </div>
      {(data.edition || data.date || data.hour) && (
        <div className='grid grid-cols-3 gap-2'>
          {data.edition && (
            <div>
              <h2 className='underline'>{lan === 'ESP' ? 'Nº de Edición' : 'Edition Number'}</h2>
              <span>{data.edition}</span>
            </div>
          )}
          {data.date && (
            <div>
              <h2 className='underline'>{lan === 'ESP' ? 'Fecha' : 'Date'}</h2>
              <span>{data.date}</span>
            </div>
          )}
          {data.hour && (
            <div>
              <h2 className='underline'>{lan === 'ESP' ? 'Hora y Lugar' : 'Time and Place'}</h2>
              <span>{data.hour}</span>
            </div>
          )}
        </div>
      )}
      {(data.participate || data.language || data.price) && (
        <div className='grid grid-cols-3 gap-2'>
          {data.participate && (
            <div>
              <h2 className='underline'>{lan === 'ESP' ? 'Participan' : 'Participate'}</h2>
              <span>{data.participate}</span>
            </div>
          )}
          {data.language && (
            <div>
              <h2 className='underline'>{lan === 'ESP' ? 'Idioma' : 'Language'}</h2>
              <span>{data.language}</span>
            </div>
          )}
          {data.price && (
            <div>
              <h2 className='underline'>{lan === 'ESP' ? 'Precio' : 'Price'}</h2>
              <span>{data.price}</span>
            </div>
          )}
        </div>
      )}

      {data.description && <div className='text-sm lg:text-base whitespace-pre-line'>{data.description}</div>}
    </section>
  )
}

export default Info
