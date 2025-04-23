import { useLocation } from 'wouter'
import Contact from './Contact'
import Header from './Header'
import Marquesina from './Marquee'
import AcercaDe from './AcercaDe'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [location] = useLocation()

  return (
    <>
      <Header />
      <main>{children}</main>

      {location === '/home' && <Marquesina />}
      <Contact />
      <AcercaDe />
    </>
  )
}

export default Layout
