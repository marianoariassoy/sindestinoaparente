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
    <>
      <div className='hidden lg:block'>
        <header
          className='fixed top-2 left-0 w-full flex 
      items-start p-1 border-t border-black bg-white gap-3 z-20 text-base'
        >
          <div className='w-60'></div>
          <div className='pl-20 w-3/5'>SIN DESTINO APARENTE</div>
          <div className='px-2 text-right w-2/5'>{time.toLocaleTimeString() + ' UTC-3 ' + getDateToday()}</div>
        </header>
      </div>
      <div className='mt-[4.3rem] pb-6 lg:hidden'>
        <header
          className='top-20 left-0 w-full flex 
      items-start p-1 border-t border-black bg-white gap-3 z-20 text-sm pl-2'
        >
          {time.toLocaleTimeString() + ' UTC-3 ' + getDateToday()}
        </header>
      </div>
    </>
  )
}

export default HeaderHome
