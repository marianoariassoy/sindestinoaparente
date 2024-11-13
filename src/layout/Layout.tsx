import Header from './Header'
import Marquee from 'react-fast-marquee'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='flex min-h-screen'>
        <Header />
        <main className='flex-1 relative'>{children}</main>
      </div>
      <div className='fixed bottom-0 left-0 w-full z-10'>
        <Marquee
          speed={50}
          direction='left'
          className='text-7xl bg-white p-1 uppercase font-condensed whitespace-nowrap'
        >
          ¿Es posible crear comunidades en este mundo fragmentado?
        </Marquee>
      </div>
    </>
  )
}

export default Layout
