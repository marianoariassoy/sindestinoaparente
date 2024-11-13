import Contact from './Contact'
import Header from './Header'
import Marquesina from './Marquee'
import Apoyo from './Apoyo'
import AcercaDe from './AcercaDe'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='flex min-h-screen'>
        <Header />
        <main className='flex-1 relative'>{children}</main>
      </div>
      <Marquesina />
      <Contact />
      <Apoyo />
      <AcercaDe />
    </>
  )
}

export default Layout
