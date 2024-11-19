import { useState, useEffect } from 'react'
import Header from '../../components/Header'

const HeaderHome = () => {
  const [time, setTime] = useState(new Date())

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
    <>
      <div className='hidden lg:block'>
        <Header
          title1='SIN DESTINO APARENTE'
          title2={time.toLocaleTimeString() + ' UTC-3 ' + getDateToday()}
        />
      </div>
      <div className='mt-[3.75rem] pb-6 lg:hidden'>
        <Header
          title1={time.toLocaleTimeString() + ' UTC-3 ' + getDateToday()}
          title2=''
        />
      </div>
    </>
  )
}

export default HeaderHome
