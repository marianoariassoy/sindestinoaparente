import { useEffect } from 'react'
import { Close } from './icons'

const closeAside = (id: string) => () => {
  console.log(id)
  const aside = document.querySelector('#' + id)
  aside?.classList.add('translate')
}

const Aside = ({
  children,
  title,
  bgColor,
  id,
  borderColor
}: {
  children: React.ReactNode
  title: string
  bgColor: string
  id: string
  borderColor: string
}) => {
  useEffect(() => {
    const metaTags = document.querySelectorAll('meta')
    metaTags.forEach(meta => {
      if (meta.getAttribute('name') === 'theme-color') {
        meta.setAttribute('content', bgColor)
      }
    })
    // return () => {}
  }, [bgColor])

  return (
    <div
      className={`p-3 lg:p-1 flex flex-col gap-y-12 text-2xl lg:text-4xl font-condensed  ${borderColor} fixed aside z-50 h-screen w-full max-w-[40rem] top-0 right-0 translate transition-all overflow-y-scroll`}
      id={id}
      style={{ backgroundColor: bgColor }}
    >
      <div className='flex justify-between items-center pr-3'>
        <h1 className='text-6xl lg:text-8xl'>{title}</h1>
        <button
          onClick={closeAside(id)}
          className='hover:opacity-60'
        >
          <Close />
        </button>
      </div>
      {children}
    </div>
  )
}

export default Aside
