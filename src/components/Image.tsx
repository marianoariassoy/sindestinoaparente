import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

interface Props {
  src: string
  alt: string
}

const ImageComponent = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-full w-full flex justify-center items-center my-8 px-4'>
      <BeatLoader />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='h-full w-full object-cover object-center transition-all'
    />
  )
}

export default ImageComponent
