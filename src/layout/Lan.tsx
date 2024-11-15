import { language } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Lan = () => {
  const { lan, setLan } = useDataContext()

  return (
    <nav className='w-full lg:border-t border-b border-black justify-between py-1 font-bold font-condensed flex'>
      {language.map((item, index) => (
        <button
          key={index}
          className={`underline-offset-2 ${item.title === lan ? 'underline' : ' '} hover:underline`}
          onClick={() => setLan(item.title)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}

export default Lan
