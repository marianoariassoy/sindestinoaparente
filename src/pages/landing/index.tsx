import { Link } from 'wouter'
import ImageComponent from '../../components/Image'
import { useDataContext } from '../../context/useDataContext'
import Time from '../../components/Time'

const Index = () => {
  const { bgimage } = useDataContext()

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

      <div className='opacity-0 fade-in-delay absolute z-50 left-0 top-0 w-full h-full flex justify-center items-center  mix-blend-exclusion p-2'>
        <Link
          to='/home'
          className='w-full lg:w-2/3 h-auto'
        >
          <img
            src='/assets/sda.svg'
            alt='Logo'
            className='w-full h-auto'
          />
        </Link>
      </div>
      <ImageComponent
        src={bgimage}
        alt='Imagen principal'
      />
    </section>
  )
}

export default Index
