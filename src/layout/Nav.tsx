import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'
import { Forward } from '../components/icons'
import Lan from './Lan'

const Nav = () => {
  const [location] = useLocation()
  const { lan } = useDataContext()
  const metaTags = document.querySelectorAll('meta')

  const openAside = (tag: string) => () => {
    document.querySelector('#acercade')?.classList.add('translate')
    document.querySelector('#apoyo')?.classList.add('translate')
    document.querySelector('#contacto')?.classList.add('translate')

    document.querySelector(tag)?.classList.remove('translate')

    metaTags.forEach(meta => {
      if (meta.getAttribute('name') === 'theme-color') {
        if (tag === '#acercade') meta.setAttribute('content', '#e8b4c8')
        else if (tag === '#apoyo') meta.setAttribute('content', '#ed6e58')
        else meta.setAttribute('content', '#4ca3cf')
      }
    })
  }

  return (
    <div
      className='absolute w-full left-0 top-[3.7rem] px-3 hidden lg:flex flex-col bg-white'
      id='menu'
    >
      <nav className='lg:my-12'>
        <ul className='flex flex-col [&>li:last-child]:border-b font-bold font-condensed'>
          {menu.map((item, index) => (
            <li
              key={index}
              className='border-t border-black'
            >
              {item.tag ? (
                <button
                  className={`flex justify-between w-full items-center hover:pl-12 transition-all py-1`}
                  onClick={openAside(item.tag)}
                >
                  <span>{lan === 'ESP' ? item.title_es : item.title_en}</span>
                  <span>
                    <Forward />
                  </span>
                </button>
              ) : (
                <Link
                  to={item.url}
                  className={`flex justify-between w-full items-center hover:pl-12 transition-all py-1 
                    ${location == item.url ? 'pl-12' : ''}`}
                >
                  <span>{lan === 'ESP' ? item.title_es : item.title_en}</span>
                  <span>
                    <Forward />
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <Lan />
    </div>
  )
}

export default Nav
