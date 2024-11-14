import { useLocation } from 'wouter'
import Contact from './Contact'
import Header from './Header'
import Marquesina from './Marquee'
import Apoyo from './Apoyo'
import AcercaDe from './AcercaDe'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  console.log(location)

  return (
    <>
      <div className='flex flex-col lg:flex-row min-h-screen'>
        <Header />
        <main className='flex-1 relative'>{children}</main>
      </div>

      {location[0] === '/home' && <Marquesina />}
      <Contact />
      <Apoyo />
      <AcercaDe />
    </>
  )
}

export default Layout
