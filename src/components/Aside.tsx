import CloseButton from '../components/CloseButton'

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
  return (
    <div
      className={`p-1 h-full flex flex-col gap-y-12 text-4xl font-condensed ${bgColor} ${borderColor} fixed aside z-50 h-screen w-[36rem] top-0 right-0 translate transition-all overflow-y-scroll`}
      id={id}
    >
      <div className='flex justify-between items-center'>
        <h1 className='text-8xl'>{title}</h1>
        <CloseButton onClick={closeAside(id)} />
      </div>
      {children}
    </div>
  )
}

export default Aside
