import { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import ImageComponent from '../../components/Image'
import Header from '../../components/Header'

const Index = () => {
  const { bgimage, lan } = useDataContext()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getDateToday = () => {
    const date = new Date()
    const days_es = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const days_en = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months_es = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic']
    const months_en = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const dayName = lan === 'ESP' ? days_es[date.getDay()] : days_en[date.getDay()]
    const month = lan === 'ESP' ? months_es[date.getMonth()] : months_en[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()

    return `${dayName} ${day} ${month} ${year}`
  }

  return (
    <Layout>
      <Header
        title1='SIN DESTINO APARENTE'
        title2={time.toLocaleTimeString() + ' UTC-3 ' + getDateToday()}
      />
      <div className='fixed top-0 left-0 w-full h-full -z-10'>
        <ImageComponent
          src={bgimage}
          alt='Imagen principal'
        />
      </div>
    </Layout>
  )
}

export default Index
