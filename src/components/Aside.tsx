import CloseButton from '../components/CloseButton'

const closeAside = () => {
  const aside = document.querySelector('.aside')
  aside?.classList.toggle('hidden')
}

const Aside = ({
  children,
  title,
  bgColor,
  borderColor
}: {
  children: React.ReactNode
  title: string
  bgColor: string
  borderColor: string
}) => {
  return (
    <div
      className={`fixed aside z-50 h-screen w-[45rem] top-0 right-0 p-3  flex flex-col gap-y-12 text-4xl font-condensed ${bgColor} ${borderColor}`}
    >
      <div className='flex justify-between items-center'>
        <h1 className='text-8xl'>{title}</h1>
        <CloseButton onClick={closeAside} />
      </div>
      {children}
    </div>
  )
}

export default Aside
