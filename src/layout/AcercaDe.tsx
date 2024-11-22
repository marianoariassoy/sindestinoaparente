import Button from '../components/Button'
import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'
import useFetch from '../hooks/useFetch'

const Contact = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/about/${lan}`)

  return (
    <Aside
      title={lan === 'ESP' ? 'Acerca de' : 'About'}
      bgColor='#e8b4c8'
      borderColor='border-tertiary'
      id='acercade'
    >
      <div className='flex flex-col gap-y-3 border-t border-black pt-6 pr-3 lg:pr-12 pb-12'>
        {!loading &&
          data.map(item => (
            <Button
              key={item.id}
              data={item}
            />
          ))}
      </div>
    </Aside>
  )
}

export default Contact
