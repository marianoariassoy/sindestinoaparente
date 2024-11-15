import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'
import { Right } from '../components/icons'

const Contact = () => {
  const { lan } = useDataContext()

  const items = {
    ESP: [
      {
        title: '',
        description:
          'Es una organización sin ánimo de lucro dedicada a promover las prácticas artísticas contemporáneas. Creemos que la colaboración es esencial para impulsar el arte y enriquecer nuestra comunidad. Te invitamos a ser parte de esta iniciativa, tu aporte nos ayuda a construir un legado cultural duradero. Descubre cómo puedes apoyarnos:'
      },
      {
        title: 'PIONEROS',
        description:
          'Nuestro programa "Pioneros" está dirigido a aquellos primeros benefactores que se unen a Cetácea para fundar y dar vida a esta residencia artística en la Península Valdés. Este programa forja un vínculo permanente entre los donantes y Cetácea, asegurando su participación en el legado cultural y social que construiremos para la comunidad local, nacional e internacional. Ser un Pionero es sumarse a una historia que trasciende.'
      },
      {
        title: 'RED REGIONAL DE PATROCINADORES',
        description:
          'La Red Regional de Patrocinadores reúne a personas, empresas y entidades locales y zonales comprometidas con el desarrollo de las artes en Chubut. Cetácea busca trabajar de la mano con quienes conocen y valoran este territorio, fortaleciendo el impacto de nuestras acciones en la comunidad.'
      },
      {
        title: 'PARTNERSHIPS',
        description:
          'Estamos abiertos a colaborar con empresas y entidades comerciales que compartan nuestra pasión por el arte. Ofrecemos diversas oportunidades de colaboración, ya sea a través de donativos, convenios de colaboración o acuerdos de patrocinio publicitario. Juntos, podemos potenciar la visibilidad de tu marca y contribuir al desarrollo cultural de la región.'
      },
      {
        title: 'DONACIONES',
        description:
          'Valoramos cada aporte, ya sea corporativo o particular, y damos la bienvenida a apasionados del arte, artistas, coleccionistas y entidades que deseen colaborar con donaciones únicas o periódicas, en el monto que deseen. Cada contribución, sin importar su tamaño, es una ayuda valiosa para la promoción del arte y el apoyo a los artistas contemporáneos.'
      }
    ],
    ENG: [
      {
        title: '',
        description:
          'It is an organization dedicated to promoting contemporary art practices. We believe in the importance of collaboration for the promotion of art and to enrich our community. We invite you to join this initiative, your contribution helps to build a cultural legacy that will last. Discover how you can support us:'
      },
      {
        title: 'PIONEROS',
        description:
          'Our "Pioneers" program is directed towards the first benefactors who join Cetácea to found and give life to this artistic residence in the Chubut Peninsula. This program forges a permanent link between the donors and Cetácea, ensuring their participation in the cultural and social legacy that we will build for the local, national, and international community. Being a Pioneer is to join a story that transcends.'
      },
      {
        title: 'DONATIONS',
        description:
          'We value every contribution, whether it be corporate or personal, and welcome enthusiastic artists, collectors, and entities who want to collaborate with unique or recurring donations, in the amount they desire. Each contribution, regardless of its size, is a valuable help for the promotion of art and the support of contemporary artists.'
      },
      {
        title: 'REGIONAL PATRON',
        description:
          'The Regional Patrons Network gathers people, businesses, and local and regional communities committed to the development of arts in Chubut. Cetácea seeks to work with those who know and value this territory, strengthening the impact of our actions in the community.'
      },
      {
        title: 'PARTNERSHIPS',
        description:
          'We welcome partners to collaborate with companies and commercial entities that share our passion for the art. We offer a variety of opportunities for collaboration, whether through donations, collaboration agreements, or publicity sponsorships. Together, we can amplify your brand and contribute to the development of the region.'
      }
    ]
  }

  const texts = {
    ESP: {
      title2: 'Colaborá con nosotras',
      text1:
        'Si deseas explorar más formas de apoyar a Cetácea, no dudes en ponerte en contacto con nuestra Productora y Coordinadora de Desarrollo.'
    },
    ENG: {
      title2: 'Collaborate with us',
      text1:
        'If you want to explore more ways to support Cetácea, don’t hesitate to get in touch with our Productora and Directora de Desarrollo.'
    }
  }
  return (
    <Aside
      title={lan === 'ESP' ? 'Apoyo' : 'Support'}
      bgColor='bg-secondary'
      borderColor='border-secondary'
      id='apoyo'
    >
      <div className='flex gap-x-3 border-t border-black pt-6 text-base pr-6'>
        <div className='w-[22px] lg:w-[30px] transition-all pt-3'>
          <Right />
        </div>
        <div className='flex-1 flex flex-col gap-y-1'>
          <h1 className='font-condensed text-2xl lg:text-4xl'>Sin Destino Aparente / Cetácea</h1>
          <div className='flex flex-col gap-y-3 [&>div>p]:indent-6 [&>div>h3]:indent-6'>
            {items[lan].map((item, index) => (
              <div key={index}>
                <h3 className='font-bold'>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex gap-x-3 border-t border-black text-base pt-6 pr-6 pb-12'>
        <div className='w-[22px] lg:w-[30px]'></div>
        <div className='flex-1 flex flex-col gap-y-1'>
          <h2 className='font-condensed text-2xl lg:text-4xl'>{texts[lan].title2}</h2>
          <div className='flex justify-between gap-x-12'>
            <div>
              <p className='indent-6'>{texts[lan].text1}</p>
            </div>
            <div className='flex flex-col'>
              <a
                href='mailto:barrioslab@gmail.com'
                className='hover:underline'
              >
                barrioslab@gmail.com
              </a>
              <a
                href='mailto:larisazmud@gmail.com'
                className='hover:underline'
              >
                larisazmud@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Aside>
  )
}

export default Contact
