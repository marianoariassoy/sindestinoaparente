import { Right } from '../../components/icons'
import { BeatLoader } from 'react-spinners'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'

const Aside = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/texts/${lan}`)

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
    </div>
  )
}

export default Aside
