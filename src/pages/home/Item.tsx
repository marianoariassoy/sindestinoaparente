import ImageComponent from '../../components/Image'

interface Props {
  item: {
    title: string
    description: string
    image: string
  }
}

const Item = ({ item }: Props) => {
  return (
    <article className='flex flex-col bg-black border-primary relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-primary opacity-0 bg-blend-exclusion hover:opacity-50 cursor-pointer'></div>
      <div className='aspect-[4/3] '>
        <ImageComponent
          src={item.image}
          alt='Imagen principal'
        />
      </div>
      <div className='text-white flex flex-col gap-y-3 pt-2 pb-3 px-12 text-center'>
        <h2 className='text-2xl font-condensed'>{item.title}</h2>
        <p className='whitespace-break-spaces text-sm'>{item.description}</p>
      </div>
    </article>
  )
}

export default Item
