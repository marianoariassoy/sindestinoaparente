import { language } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Lan = () => {
  const { lan, setLan } = useDataContext()

  return (
    <nav className='border-t border-b border-black flex justify-between py-1 font-bold font-condensed'>
      {language.map((item, index) => (
        <button
          key={index}
          className={`${item.title === lan ? 'underline' : ' '} hover:underline`}
          onClick={() => setLan(item.title)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}

export default Lan
