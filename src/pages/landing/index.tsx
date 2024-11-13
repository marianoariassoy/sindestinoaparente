import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import ImageComponent from '../../components/Image'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const [time, setTime] = useState(new Date())
  const { bgimage } = useDataContext()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getDateToday = () => {
    const date = new Date()
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic']

    const dayName = days[date.getDay()]
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${dayName} ${day} ${month} ${year}`
  }

  return (
    <section className='h-screen w-full'>
      <header
        className='absolute z-50 left-0 top-0 w-full p-2 flex justify-between gap-4 text-xl lg:text-3xl font-condensed text-primary
      mix-blend-exclusion
      '
      >
        <div>SIN DESTINO APARENTE</div>
        <div className='flex flex-col lg:flex-row items-end gap-x-2'>
          <span>{time.toLocaleTimeString()} UTC-3</span>
          <span>{getDateToday()}</span>
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
