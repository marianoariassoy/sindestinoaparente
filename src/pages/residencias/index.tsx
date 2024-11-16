import Layout from '../../layout/Layout'
import Header from '../../components/Header'
import ComponentLeft from '../../components/ComponentLeft'
import ComponentRight from '../../components/ComponentRight'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  const images = ['/images/landing/4.jpg', '/images/landing/3.jpg', '/images/landing/2.jpg', '/images/landing/1.jpg']

  const data = [
    {
      title: '2025',
      subtitle: '',
      image: '',
      description: `Participantes
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum`
    },
    {
      title: '2024',
      subtitle: '',
      image: '',
      description: `Participantes
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum
	Lorem Ipsum`
    }
  ]

  return (
    <Layout>
      <section className='flex flex-col-reverse lg:flex-row items-start pt-[4.2rem] lg:pt-0 lg:pl-60'>
        <ComponentLeft images={images} />

        <Header
          title1='Península Valdés, Chubut, Argentina'
          title2=''
        />

        <ComponentRight
          data={data}
          title={lan === 'ESP' ? 'Ediciones' : 'Editions'}
        >
          <div className='flex flex-col gap-y-3 leading-5 max-w-xl text-sm lg:text-base'>
            <h1 className='font-condensed text-2xl lg:text-3xl indent-9'>Cetácea</h1>
            <h2 className='pl-9'>
              Fecha de lanzamiento: Marzo 2025 <br />
              Fecha de residencia: Junio 2025
            </h2>
            <div className='[&>p]:indent-9 pb-6'>
              <p>
                Cetácea es una residencia artística, que propone practicar y promover experiencias transformadoras
                dentro de y a través de diferentes campos y enfoques. En colaboraciones inesperadas con el territorio en
                sentido amplio, nos acercamos a lo rural, naturocultural y situado de la costa del Chubut. Se trata de
                ir de visita por fuera de los caminos prediseñados, para buscar en los detalles, los ingredientes ricos
                e indispensables para contar nuevas historias. Los relatos están en los detalles de las prácticas y
                saberes específicos de la región, en sus habitantes de todas las especies, donde cada uno ejerce su
                oficio y forma parte de una red de colaboraciones plagada de saberes y cuidados recíprocos.
              </p>
              <p>
                Cetácea es una forma de habitar desde un enfoque amable, para construir nuevas percepciones, y crear
                diálogos que desestabilicen los binomios naturaleza-cultura / animal-humano / verdad-ficción, etc.
                Atentxs a la hospitalidad del paisaje de la Península de Valdés, refugio de la Ballena Franca Austral,
                los médanos en movimiento, el horizonte desértico lunar junto al mar, de restos fósiles y formas de vida
                cuyo linaje tiene una larga historia que precede a la humanidad. Buscamos escuchar los susurros de la
                arena y la respiración de las ballenas, en torno a una mesa donde compartir nuestras recetas de cocina
                (de comida y de vida), donde generar de manera colectiva formas alternativas de contar el pasado, el
                presente y el futuro del mundo en el que vivimos, para inventar el mundo en el que deseamos vivir.
              </p>
              <p>
                La residencia está destinada a artistas de todas las disciplinas, críticos y curadores, de todas las
                edades, nacionalidades y experiencias, para crear una red inter-todo de intercambios sorprendentes y
                ricos, entre todxs lxs participantes, visitantes y locales de Península Valdés (una reserva natural
                unida al continente por un brazo de tierra de sólo 6 kilómetros de ancho).
              </p>
            </div>
          </div>
        </ComponentRight>
      </section>
    </Layout>
  )
}

export default Index
