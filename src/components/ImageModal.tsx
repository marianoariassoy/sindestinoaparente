import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

interface Props {
  src: string
  alt: string
  setCurrentImage: (image: string) => void
}

const ImageComponent = ({ src, alt, setCurrentImage }: Props) => {
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
    <article className='h-[20rem] w-full flex justify-center items-center'>
      <BeatLoader />
    </article>
  ) : (
    <article className={`relative ${isPortrait ? 'w-full' : 'w-[60%]'}`}>
      <button
        className='absolute top-0 left-0 w-full h-full bg-primary opacity-0 mix-blend-exclusion hover:opacity-50 '
        onClick={() => setCurrentImage(src)}
      ></button>
      <img
        src={src}
        alt={alt}
        className='w-full'
      />
    </article>
  )
}

export default ImageComponent
