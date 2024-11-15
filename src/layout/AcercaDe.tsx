import Button from '../components/Button'
import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'

const Contact = () => {
  const { lan } = useDataContext()

  const data = [
    {
      title: 'Larisa Zmud',
      subtitle: 'Directora y Fundadora',
      image: '/images/2.jpg',
      description: `Las prácticas de Larisa como curadora, investigadora y docente se centran en los estudios de género, la igualdad cultural y el conocimiento compartidos a través de actividades colaborativas y cocinas comunitarias. Las claves de su trabajo son el encuentro colectivo y los cuidados con las herramientas poéticas que proporciona el arte contemporáneo. En su práctica curatorial piensa el arte contemporáneo como una lente a través del cual podemos acercarnos al mundo desde distintos ángulos.

Nacida en Mar del Plata (Argentina) en 1985, Zmud se crió como nómada. Durante su infancia vivió entre su ciudad natal y la estepa patagónica, donde su padre trabajaba como maestro rural en la comunidad mapuche “Ranquil Huao” en la provincia de Chubut. Actualmente vive y trabaja en la Ciudad de Buenos Aires, donde sus primeras experiencias de vida multidiversa y comunitarias siguen influyendo en todos sus intereses, relaciones y prácticas. Zmud es Licenciada en Curaduría de Arte por la Universidad Nacional de las Artes (2018), y realizó la Maestría en Política y Estudios de Género en la Universidad de Tres de Febrero (2022). En 2014 formó parte del Programa Artistas, Críticos y Curadores de la Universidad Torcuato Di Tella dirigido por Inés Katzenstein. Entre 2011 y 2018 dirigió su propia galería: SlyZmud, donde se realizaron más de 40 exposiciones de jóvenes artistas argentinos contemporáneos como Mercedes Azpilicueta, Jill Mulleady, Jimena Croceri, entre otras. Fue fundadora y miembro de la comisión directiva de MERIDIANO, la Cámara Argentina de Galerías de Arte Contemporáneo.

En 2018, Zmud creó Sin Destino Aparente, grupos de lectura y pensamiento crítico. Entre 2020 y 2021, formó parte de la Dirección Nacional de Políticas Culturales para la Igualdad del Ministerio de Mujeres, Géneros y Diversidades de Argentina. Zmud forma parte Belleza y Felicidad Fiorito donde dicta clases de cocina y coordina el Comedor Gourmet, un espacio artístico y gastronómico destinado a redefinir la alimentación como forma de pensar sobre las políticas de los cuerpos y el deseo. Zmud es curadora independiente y actualmente coordina el Mapa Contemporáneo de Arte Argentino en Construcción, creado en el marco de la 55a Conferencia Anual del CIMAM 2023. Ha sido parte del programa de residencias 2024 de la Colección KADIST en París. A través de exposiciones, conferencias públicas, procesos curatoriales, asesoramiento de colecciones y la creación de redes entre agentes del mundo del arte internacional intenta crear nuevas metodologías de acceso a formas de conocimiento. Siempre pensando en el arte como herramienta de transformación social. Actualmente,  dentro de la para-institución de Sin Destino Aparente, ha fundado la primera residencia artística internacional en Chubut: Cetácea.`
    },
    {
      title: 'Josefina Del Pópolo',
      subtitle: 'Editora Ejecutiva',
      image: '/images/2.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: 'Cayetana M. Barreto ',
      subtitle: 'Asistente de Dirección y Curaduría',
      image: '/images/2.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: 'Paula Barrios',
      subtitle: ' Productora y Coordinadora de Desarrollo',
      image: '/images/2.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: 'Mercedes D’Angelo',
      subtitle: ' Productora y Coordinadora de Desarrollo',
      image: '/images/2.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ]

  return (
    <Aside
      title={lan === 'ESP' ? 'Acerca de' : 'About'}
      bgColor='bg-tertiary'
      borderColor='border-tertiary'
      id='acercade'
    >
      <div className='flex flex-col gap-y-3 border-t border-black pt-6 pr-3 lg:pr-12 pb-12'>
        {data.map((item, index) => (
          <Button
            key={index}
            data={item}
          />
        ))}
      </div>
    </Aside>
  )
}

export default Contact
