const Header = ({ title1 = '', title2 = '' }: { title1: string; title2?: string }) => {
  return (
    <header
      className='hidden lg:flex fixed top-20 lg:top-2 left-0 w-full 
      items-start p-1 border-t border-black bg-white gap-3 z-20 text-sm lg:text-base'
    >
      <div className='hidden lg:block lg:w-60'></div>
      <div className='pl-2 lg:pl-20 lg:w-3/5'>{title1}</div>
      <div className='px-2 lg:text-right lg:w-2/5'>{title2}</div>
    </header>
  )
}

export default Header
