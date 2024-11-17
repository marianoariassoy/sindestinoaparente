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
      title: 'Banquete Amador',
      subtitle: '',
      image: '',
      description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: 'Paisanaje',
      subtitle: '',
      image: '',
      description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `
    },
    {
      title: 'Comité',
      subtitle: '',
      image: '',
      description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `
    },
    {
      title: ' Comedor Gourmet',
      subtitle: '',
      image: '',
      description: `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `
    }
  ]

  return (
    <Layout>
      <section className='flex flex-col-reverse lg:flex-row items-start pt-20 lg:pt-0 lg:pl-60'>
        <ComponentLeft images={images} />

        <Header
          title1='Comité, 2024'
          title2=''
        />

        <ComponentRight
          data={data}
          topTitle={lan === 'ESP' ? 'Ediciones' : 'Editions'}
          title='Suave Desliz'
          description=''
        >
          <p>Comida y arte en el cruce.</p>
          <p>
            Ciclo de cenas donde mes a mes un artista y un chef son invitadxs a colaborar mutuamente, cruzar sus
            prácticas y crear una experiencia que no es ni exclusivamente gastronómica ni artística, sino que se nutre y
            contagia una de la otra para inventar una propuesta única cada vez.
          </p>
          <p>
            Estos encuentros promueven la comida y arte en cruce, siendo las dos disciplinas de la vida que tienen el
            permiso de mezclarlo todo y elaborar nuevos significados. La mezcla como motor y disparador de invención de
            ambas disciplinas.
          </p>
        </ComponentRight>
      </section>
    </Layout>
  )
}

export default Index
