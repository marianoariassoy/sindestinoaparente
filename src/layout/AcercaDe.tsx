import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'

const Contact = () => {
  const { lan } = useDataContext()

  return (
    <Aside
      title={lan === 'ESP' ? 'Acerca de' : 'About'}
      bgColor='bg-tertiary'
      borderColor='border-tertiary'
    >
      de
    </Aside>
  )
}

export default Contact
