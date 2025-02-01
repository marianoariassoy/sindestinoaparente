import Button from '../components/ButtonAbout'
import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'
import HTML from '../hooks/useHTML'

const Contact = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/about/${lan}`)
  const { data: texts, loading: textsLoading } = useFetch(`/texts/${lan}`)

  return (
    <Aside
      title={lan === 'ESP' ? 'Acerca de' : 'About'}
      bgColor='#e8b4c8'
      borderColor='border-tertiary'
      id='acercade'
    >
      {textsLoading ? (
        <Loader />
      ) : (
        <div className='text-base font-sans leading-5'>
          <HTML text={texts[3].description} />
        </div>
      )}

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
