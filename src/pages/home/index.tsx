import { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import ImageComponent from '../../components/Image'
import Header from '../../components/Header'
import Item from './Item'

const Index = () => {
  const { bgimage, lan } = useDataContext()
  const [time, setTime] = useState(new Date())

  const data = [
    {
      title: 'Seminarios',
      description: 'Pronto compartiremos +  información. Mantente atentx a nuestras redes sociales',
      image: '/images/1.jpg'
    },
    {
      title: 'Residencias',
      description: `Fecha de lanzamiento: Marzo 2025
Fecha de residencia: Junio 2025`,
      image: '/images/2.jpg'
    },
    {
      title: 'Club de cenas',
      description: 'Pronto compartiremos +  información. Mantente atentx a nuestras redes sociales!',
      image: '/images/3.jpg'
    }
  ]

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
      <div className='grid grid-cols-3 items-center justify-center gap-x-6 p-6 h-full max-w-7xl m-auto'>
        {data.map((item, index) => (
          <Item
            key={index}
            item={item}
          />
        ))}
      </div>
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
