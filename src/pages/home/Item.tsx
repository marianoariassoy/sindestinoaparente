import { Link } from 'wouter'
import ImageComponent from '../../components/Image'
import { ItemHomeProps } from '../../types/Types'

const Item = ({ item }: { item: ItemHomeProps }) => {
  return (
    <article className='flex flex-col bg-black border-primary relative max-w-md'>
      <Link to={item.url}>
        <div className='aspect-[5/2] lg:aspect-[4/3] overflow-hidden [&>img]:hover:scale-105'>
          <ImageComponent
            src={item.image}
            alt='Imagen principal'
          />
        </div>
        <div className='text-white flex flex-col lg:gap-y-1 pt-2 pb-3 px-3 text-center'>
          <h2 className='text-xl lg:text-3xl font-condensed'>{item.title}</h2>
          <p className='whitespace-break-spaces text-sm'>{item.description}</p>
        </div>
      </Link>
    </article>
  )
}

export default Item
