import { useLocation } from 'wouter'
import Contact from './Contact'
import Header from './Header'
import Marquesina from './Marquee'
import Apoyo from './Apoyo'
import AcercaDe from './AcercaDe'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [location] = useLocation()

  return (
    <>
      <Header />
      <main>{children}</main>

      {location === '/home' && <Marquesina />}
      <Contact />
      <Apoyo />
      <AcercaDe />
    </>
  )
}

export default Layout
