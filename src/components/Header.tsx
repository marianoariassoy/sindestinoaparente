import { useState } from 'react'

const Header = ({ title1, title2 }: { title1: string; title2: string }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <header
      className={`absolute border-t border-black w-full bg-white top-2 flex justify-between gap-3 items-center z-20 text-lg px-3 lg:pl-32 lg:pr-24 cursor-pointer ${
        isOpen ? '' : 'hidden'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>{title1}</div>
      <div>{title2}</div>
    </header>
  )
}

export default Header
