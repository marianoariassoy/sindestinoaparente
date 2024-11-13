const Header = ({ title1, title2 }: { title1: string; title2: string }) => {
  return (
    <header className='absolute border-t border-black w-full bg-white top-2 flex justify-between gap-3 items-center z-20 text-lg pl-32 pr-24'>
      <div>{title1}</div>
      <div>{title2}</div>
    </header>
  )
}

export default Header
