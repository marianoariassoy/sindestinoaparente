import { useState, useEffect } from 'react'

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
    <header
      className='hidden lg:flex fixed top-2  w-full 
items-start p-1 border-t border-black bg-white gap-3 z-20'
    >
      <div className='pl-12'>{time.toLocaleTimeString() + ' UTC-3 ' + getDateToday()}</div>
    </header>
  )
}

export default HeaderHome
