import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'

const Contact = () => {
  const { lan } = useDataContext()

  return (
    <Aside
      title={lan === 'ESP' ? 'Contacto' : 'Contact'}
      bgColor='bg-quaternary'
      borderColor='border-quaternary'
    >
      <div className='flex flex-col gap-y-12 border-t border-black pt-6'>
        <span>Para consultas generales contáctanos a través de sda@gmail.com</span>
        <span>Suscríbete para recibir novedades</span>
        <span>Seguínos en @___sindestinoaparente</span>
      </div>
      <div className='border-t border-black pt-6'>
        <span>Colaborá con nosotras</span>
        <div className='font-sans flex justify-between text-base mt-3 max-w-md'>
          <span>Contacto</span>
          <div className='flex flex-col'>
            <span>barrioslab@gmail.com</span>
            <span>larisazmud@gmail.com</span>
          </div>
        </div>
      </div>
    </Aside>
  )
}

export default Contact
