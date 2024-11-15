import { Link } from 'wouter'
import Nav from './Nav'

const Header = () => {
  const openMenu = () => {
    document.querySelector('#menu')?.classList.toggle('hidden')
  }

  return (
    <header className='fixed top-0 left-0 w-full flex justify-between items-end lg:w-60 z-40 p-3 bg-white lg:items-start lg:h-screen'>
      <Link to='/home'>
        <h1 className='font-condensed text-3xl hover:text-primary'>SDA</h1>
      </Link>

      <Nav />

      <button
        className='text-sm lg:hidden'
        onClick={openMenu}
      >
        MENÚ
      </button>
    </header>
  )
}

export default Header
