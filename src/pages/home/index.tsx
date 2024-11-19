import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import ImageComponent from '../../components/Image'
import Item from './Item'
import HeaderHome from './Header'

const Index = () => {
  const { bgimage, lan } = useDataContext()

  const data = [
    {
      title_es: 'Seminarios',
      title_en: 'Seminars',
      description_es: 'Pronto compartiremos +  información. Mantente atentx a nuestras redes sociales',
      description_en: 'Pronto compartiremos +  información. Mantente atentx a nuestras redes sociales',
      image: '/images/1.jpg',
      url: '/seminarios'
    },
    {
      title_es: 'Residencias',
      title_en: 'Residencies',
      description_es: `Fecha de lanzamiento: Marzo 2025
Fecha de residencia: Junio 2025`,
      description_en: `Fecha de lanzamiento: Marzo 2025
Fecha de residencia: Junio 2025`,
      image: '/images/2.jpg',
      url: '/residencias'
    },
    {
      title_es: 'Club de cenas',
      title_en: 'Club of dances',
      description_es: 'Pronto compartiremos +  información. Mantente atentx a nuestras redes sociales!',
      description_en: ' Pronto compartiremos +  información. Mantente atentx a nuestras redes sociales!',
      image: '/images/3.jpg',
      url: '/cenas'
    }
  ]

  return (
    <Layout>
      <HeaderHome />

      <section className='px-3 pb-32 lg:py-0 lg:pl-72 lg:pr-12 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:h-screen'>
        {data.map((item, index) => (
          <Item
            key={index}
            title={lan === 'ESP' ? item.title_es : item.title_en}
            description={lan === 'ESP' ? item.description_es : item.description_en}
            image={item.image}
            url={item.url}
          />
        ))}
      </section>
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
