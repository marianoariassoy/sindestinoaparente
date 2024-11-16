import Layout from '../../layout/Layout'
import Header from '../../components/Header'
import ComponentLeft from '../../components/ComponentLeft'
import ComponentRight from '../../components/ComponentRight'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  const images = ['/images/landing/3.jpg', '/images/landing/2.jpg', '/images/landing/1.jpg', '/images/landing/4.jpg']

  const data = [
    {
      title: '2019 - 2024',
      subtitle: '',
      image: '',
      description: `Algunos de los texos que leímos

“La estetización del mundo”, Lipovetsky y Serroy
“Volverse público”, Boris Groys
“Desnudez”, Giorgio Agamben
“Realismo Capitalista”, Mark Fisher
“624 / 7”, Jonathan Crary
“El Patriarcado del Salario”, Silvia Federicci
“Un apartamento en Urano”, Paul B. Preciado
“Autobiografia de un pulpo”, Vinciane Despret
“Que dirian los animales si les hiciesemos las preguntas correctas”, Vinciane Despret
“Seguir con el problema”, Donna Haraway
“Las aventuras de la China Iron”, Gabriela Cabezon Camara
“La promesa de la felicidad”, Sara Ahmed
“Esferas de la insurrección” Suely Rolnik
“Caliban y la bruja”, Silvia Federicci
“La potencia Feminista”, Veronica Gago
“Borrador para un abecedario del desacato”, Vir Cano`
    }
  ]

  return (
    <Layout>
      <section className='flex flex-col-reverse lg:flex-row items-start pt-[4.2rem] lg:pt-0 lg:pl-60'>
        <ComponentLeft images={images} />

        <Header
          title1='Seguir con el problema, Donna J. Haraway'
          title2=''
        />
        <ComponentRight
          data={data}
          title={lan === 'ESP' ? 'Ediciones' : 'Editions'}
        >
          <div className='flex flex-col gap-y-3 leading-5 max-w-xl text-sm lg:text-base'>
            <h1 className='font-condensed text-2xl lg:text-3xl indent-9'>Seminarios</h1>
            <h2 className='pl-9'>
              Pronto compartiremos + información. <br />
              Mantente atentx a nuestras redes sociales!
            </h2>
            <div className='[&>p]:indent-9 pb-6'>
              <p>
                Regresan los grupos de lectura colectiva con los que nació Sin Destino Aparente, en el año 2019.
                Lecturas y reflexiones que hemos compartido y no pierden su carácter contemporáneo, ya que se vuelven
                incluso más pertinentes ante el devenir de este mundo que habitamos.{' '}
              </p>
              <p>
                Nos aventuramos en esto de seguir con el problema. La curiosidad nos atraviesa y el deseo nos posee de
                maneras inimaginables, queremos inventar otras formas de habitar la tierra dañada, de vivir y morir
                en-con ella con las plantas, las abejas, las maquinitas, las bacterias, las hormigas (que todas juntas
                pesan más que todas las personas juntas).
              </p>
              <p>
                SDA, mutante y tentacular, propone una estructura novedosa pero que no deja atrás aquella con la que
                nació. A partir de cuatro seminarios anuales, crearemos derivas de lecturas y conversaciones con voces
                heterogéneas para intervenir en el pensamiento y en la afectividad de nuestras vidas y darnos
                herramientas para desacatar las formas y matrices de las que parece que no tenemos escapatorias.
              </p>
              <p>
                Cada seminario se inscribe dentro de una totalidad post natural, queer, contra colonial que nos
                caracteriza.
              </p>
              <p>
                Como siempre, Sin Destino Aparente explorará diferentes herramientas de aprendizaje desde una
                multidisciplinariedad que caracteriza esta para-institución académica. La mayoría de los encuentros
                serán virtuales, donde nos valdremos de diferentes recursos como la literatura, la poesía, las artes
                plásticas, el cine, la filosofía y la ciencia para explorar diferentes alternativas a aquellos binomios
                modernos que nos han traído a este oscuro presente.
              </p>
              <p>
                Conversaciones, puestas en común, conferencias dictadas por referentes pensadores, artistas, y filósofos
                son algunas de las actividades que exploraremos juntxs. La conversación basta con que dos personas
                comiencen a hablar, pero conversar es mucho más que eso. Las conversaciones habilitan cuerpos, espacios,
                historias, experiencias y también son una manera de colectivizar afecciones individuales y hacerlas
                potencia colectiva.
              </p>
              <p>
                Somos seres deseantes que nos creamos con nuestras memorias, narrativas, emociones e historias, tanto
                como con nuestras producciones y sueños.
              </p>
              <p>
                Cada seminario cuenta con materiales bibliográficos que serán compartidos con anticipación y que
                habilitan que cualquier alumnx agregue o recomiende más recursos, ya que no se trata de seminarios
                verticales jerarquizados, sino de un espacio rizomático donde aprendemos a convivir juntxs.
              </p>
              <p>
                En estas actividades lo que importa es el trayecto, el valor mismo de la lectura generando un
                intercambio más plural que nos permita contar-nos. Siempre mutantes, con palabras que viajan a través de
                los cuerpos y que narran historias, que atraviesan nuestras lenguas, nuestras profesiones, nuestras
                emociones y afecciones hasta convertirse en nuevas formas posibles de contarnos otros presentes más
                tiernos para seguir con el problema de vivir en este mundo.
              </p>
            </div>
          </div>
        </ComponentRight>
      </section>
    </Layout>
  )
}

export default Index
