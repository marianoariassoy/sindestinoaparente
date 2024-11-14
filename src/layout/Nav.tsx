import { Link } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'
import { Forward } from '../components/icons'

const Nav = () => {
  // const [location] = useLocation()
  const { lan } = useDataContext()

  const openAside = (tag: string) => () => {
    document.querySelector('#acercade')?.classList.add('translate')
    document.querySelector('#apoyo')?.classList.add('translate')
    document.querySelector('#contacto')?.classList.add('translate')

    console.log(tag)
    document.querySelector(tag)?.classList.remove('translate')
  }

  return (
    <nav className='hidden lg:block'>
      <ul className='flex flex-col [&>li:last-child]:border-b font-bold font-condensed'>
        {menu.map((item, index) => (
          <li
            key={index}
            className='border-t border-black'
          >
            {item.tag ? (
              <button
                className='flex justify-between w-full items-center hover:pl-12 transition-all py-1'
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
                className='flex justify-between w-full items-center hover:pl-12 transition-all py-1'
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
  )
}

export default Nav
