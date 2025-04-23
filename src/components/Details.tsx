import Layout from '../layout/Layout'
import { useDataContext } from '../context/useDataContext'
import Date from './Date'
import Images from './images'
import Info from './Info'
import Header from './Header'

const Details = ({ id, section }: { id: number; section: number }) => {
  const { lan } = useDataContext()

  return (
    <Layout>
      <section className='flex flex-col-reverse lg:flex-row items-start pt-20 lg:pt-0 lg:pl-60'>
        <div className='lg:w-[60%] relative lg:h-screen pb-4'>
          <Date />
          <Header
            item={id}
            lan={lan}
          />
          <Images
            item={id}
            lan={lan}
          />
        </div>
        <div className='lg:fixed right-0 top-0 w-full lg:w-[33%] lg:pb-12 lg:h-screen overflow-y-auto bg-white z-40'>
          <Info
            section={section}
            item={id}
            lan={lan}
            title={false}
          />
        </div>
      </section>
    </Layout>
  )
}

export default Details
