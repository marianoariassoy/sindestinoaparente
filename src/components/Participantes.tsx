import useFetch from '../hooks/useFetch'
import { BeatLoader } from 'react-spinners'
import ParticipantesItem from './ParticipantesItem'

const Participantes = ({ item, lan }: { item: number; lan: string }) => {
  const { data, loading } = useFetch(`/items/${item}/participants/${lan}`)

  if (loading)
    return (
      <div>
        <BeatLoader />
      </div>
    )

  if (!data) return null

  return (
    <ul className='flex flex-col leading-5'>
      {data.map(item => (
        <ParticipantesItem
          item={item}
          key={item.id}
        />
      ))}
    </ul>
  )
}

export default Participantes
