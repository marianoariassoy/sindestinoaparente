import Layout from '../../layout/Layout'
import Details from '../../components/Details'
import { useParams } from 'wouter'

const DetailsMain = () => {
  const { id } = useParams() as { id: number }

  return (
    <Layout>
      <Details
        id={id}
        info={294}
        section={1}
      />
    </Layout>
  )
}

export default DetailsMain
