import Aside from '../components/Aside'
import { useDataContext } from '../context/useDataContext'

const Contact = () => {
  const { lan } = useDataContext()

  const texts = {
    ESP: {
      text1: 'Para consultas generales contáctanos a través de ',
      text2: 'Suscríbete para recibir novedades',
      text3: 'Seguínos en ',
      text4: 'Colaborá con nosotras'
    },
    ENG: {
      text1: 'To general inquiries, contact us through ',
      text2: 'Subscribe to receive news',
      text3: 'Follow us on ',
      text4: 'Collaborate with us'
    }
  }

  return (
    <Aside
      title={lan === 'ESP' ? 'Contacto' : 'Contact'}
      bgColor='bg-quaternary'
      borderColor='border-quaternary'
      id='contacto'
    >
      <div className='flex flex-col gap-y-12 border-t border-black pt-6'>
        <div>
          {lan === 'ESP' ? texts.ESP.text1 : texts.ENG.text1}
          <a
            href='mailto:sda@gmail.com'
            className='hover:underline'
          >
            sda@gmail.com
          </a>
        </div>
        <div>{lan === 'ESP' ? texts.ESP.text2 : texts.ENG.text2}</div>
        <div>
          {lan === 'ESP' ? texts.ESP.text3 : texts.ENG.text3}
          <a
            href='http://instagram.com/____sindestinoaparente'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            @___sindestinoaparente
          </a>
        </div>
      </div>
      <div className='border-t border-black pt-6'>
        <div>{lan === 'ESP' ? texts.ESP.text4 : texts.ENG.text4}</div>
        <div className='font-sans flex justify-between text-base mt-3 max-w-md'>
          <div>Contacto</div>
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
    </Aside>
  )
}

export default Contact
