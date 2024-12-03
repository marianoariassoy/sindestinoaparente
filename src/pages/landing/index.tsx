import { Link } from 'wouter'
import ImageComponent from '../../components/Image'
import { useDataContext } from '../../context/useDataContext'
import Time from '../../components/Time'

const Index = () => {
  const { bgImage } = useDataContext()

  return (
    <section className='h-screen w-full'>
      <header
        className='absolute z-50 left-0 top-0 w-full p-2 flex justify-between gap-4 text-xl lg:text-3xl font-condensed text-primary
      mix-blend-exclusion
      '
      >
        <div>SIN DESTINO APARENTE</div>
        <div className='flex flex-col lg:flex-row items-end gap-x-2'>
          <Time />
        </div>
      </header>

      <Link to='/home'>
        <ImageComponent
          src={bgImage}
          alt='Imagen principal'
        />
      </Link>
    </section>
  )
}

export default Index
