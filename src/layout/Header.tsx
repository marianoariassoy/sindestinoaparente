import { Link } from 'wouter'
import Nav from './Nav'
import Lan from './Lan'

const Header = () => {
  return (
    <header className='w-full lg:max-w-60 flex flex-col gap-y-12 p-3 bg-white'>
      <Link to='/home'>
        <h1 className='font-condensed text-xl lg:text-3xl hover:text-primary'>SDA</h1>
      </Link>
      <Nav />
      <Lan />
    </header>
  )
}

export default Header
