import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

interface Props {
  src: string
  alt: string
  title: string
  setCurrentImage: (image: string) => void
}

const ImageComponent = ({ src, alt, title, setCurrentImage }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsPortrait(image.width > image.height)
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <article className='h-[20rem] w-full flex justify-center items-center px-4'>
      <BeatLoader />
    </article>
  ) : (
    <article className={`relative ${isPortrait ? 'w-full' : 'w-[60%]'}`}>
      <button
        className='absolute top-0 left-0 w-full h-full'
        onClick={() => setCurrentImage(src)}
      ></button>
      <img
        src={src}
        alt={alt}
        className='w-full'
      />
      {title && <div className='py-2 text-sm'>{title}</div>}
    </article>
  )
}

export default ImageComponent
