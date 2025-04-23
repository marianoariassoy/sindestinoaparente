import { Right } from '../../components/icons'
import { BeatLoader } from 'react-spinners'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'

const Aside = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/texts/${lan}`)

  const texts = {
    ESP: {
      title2: 'Colaborá con nosotras',
      text1:
        'Si deseas explorar más formas de apoyar a Cetácea, no dudes en ponerte en contacto con nuestra Productora y Coordinadora de Desarrollo.'
    },
    ENG: {
      title2: 'Collaborate with us',
      text1:
        'If you want to explore more ways to support Cetácea, don’t hesitate to get in touch with our Productora and Directora de Desarrollo.'
    }
  }

  return (
    <div className='mt-2 flex flex-col gap-y-3 border-t border-black'>
      <div className='flex gap-x-3 pt-6 text-base pr-6 pb-8'>
        <div className='w-6 transition-all pt-[0.6rem]'>
          <Right />
        </div>
        <div className='flex-1 flex flex-col gap-y-1'>
          <h1 className='font-condensed text-2xl lg:text-4xl'>Sin Destino Aparente</h1>
          <div className='flex flex-col gap-y-3 [&>div>p]:indent-6 [&>div>h3]:indent-6'>
            {loading ? (
              <BeatLoader />
            ) : (
              <div className='text-base font-sans leading-5'>
                <HTML text={data[1].description} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='flex gap-x-3 border-t border-black text-base pt-6 pr-6 pb-12'>
        <div className='w-[22px] lg:w-[30px]'></div>
        <div className='flex-1 flex flex-col gap-y-1'>
          <h2 className='font-condensed text-2xl lg:text-4xl'>{texts[lan].title2}</h2>
          <div className='flex justify-between gap-x-12'>
            <p className=''>{texts[lan].text1}</p>
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
      </div>
    </div>
  )
}

export default Aside
