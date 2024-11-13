import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'

const Contact = () => {
  const { lan } = useDataContext()

  return (
    <Aside
      title={lan === 'ESP' ? 'Apoyo' : 'Support'}
      bgColor='bg-secondary'
      borderColor='border-secondary'
    >
      s
    </Aside>
  )
}

export default Contact
