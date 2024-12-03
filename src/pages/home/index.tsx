import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import ImageComponent from '../../components/Image'
import Item from './Item'
import Header from './Header'
import useFetch from '../../hooks/useFetch'

const Index = () => {
  const { bgImage, lan } = useDataContext()
  const { data, loading } = useFetch(`/shortcuts/${lan}`)

  return (
    <Layout>
      <Header />

      <section className='px-3 pb-32 lg:py-0 lg:pl-72 lg:pr-12 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:h-screen'>
        {!loading &&
          data.map((item, index) => (
            <Item
              key={index}
              item={item}
            />
          ))}
      </section>

      <div className='fixed top-0 left-0 w-full h-full -z-10'>
        <ImageComponent
          src={bgImage}
          alt='Imagen principal'
        />
      </div>
    </Layout>
  )
}

export default Index
