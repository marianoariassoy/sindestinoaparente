import Marquee from 'react-fast-marquee'
import { useDataContext } from '../context/useDataContext'

const Marquesina = () => {
  const { lan } = useDataContext()
  return (
    <div className='fixed bottom-0 left-0 w-full z-10'>
      <Marquee
        speed={50}
        direction='left'
        className='text-7xl bg-white p-1 uppercase font-condensed whitespace-nowrap'
      >
        {lan === 'ESP'
          ? '¿Es posible crear comunidades en este mundo fragmentado?'
          : 'Is it possible to create communities in this fragmented world?'}
      </Marquee>
    </div>
  )
}

export default Marquesina
