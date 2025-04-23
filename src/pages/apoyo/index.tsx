import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import Aside from './Aside'
import Partners from './Partners'

const Index = () => {
  const { lan } = useDataContext()

  return (
    <Layout>
      <section className='flex flex-col-reverse lg:flex-row items-start pt-20 lg:pt-0 lg:pl-60'>
        <div className='lg:w-[60%] relative lg:h-screen pb-4'>
          <Partners />
        </div>
        <div className='lg:fixed right-0 top-0 w-full lg:w-[33%] lg:pb-4 lg:h-screen overflow-y-auto bg-white z-40'>
          <Aside lan={lan} />
        </div>
      </section>
    </Layout>
  )
}

export default Index
