// import { Link } from 'wouter'
import { menu } from '../components/data'
import { useDataContext } from '../context/useDataContext'
import { Forward } from '../components/icons'

const Nav = () => {
  // const [location] = useLocation()
  const { lan } = useDataContext()

  return (
    <nav className=''>
      <ul className='flex flex-col [&>li:last-child]:border-b font-bold font-condensed'>
        {menu.map((item, index) => (
          <li
            key={index}
            className='border-t border-black py-1 flex justify-between items-center'
          >
            <span>{lan === 'ESP' ? item.title_es : item.title_en}</span>
            <span>
              <Forward />
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
