import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { es, enUS } from 'date-fns/locale'
import { useDataContext } from '../../context/useDataContext'

interface CalendarHeaderProps {
  currentDate: Date
  onNextMonth: () => void
  onPrevMonth: () => void
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, onNextMonth, onPrevMonth }) => {
  const { lan } = useDataContext()
  const [selectedLocale, setSelectedLocale] = useState(es)

  useEffect(() => {
    if (lan === 'ESP') setSelectedLocale(es)
    else if (lan === 'ENG') setSelectedLocale(enUS)
    else setSelectedLocale(es)
  }, [lan])

  return (
    <div className='flex items-center justify-between bg-primary border-t border-black mt-20 lg:mt-3 px-3 '>
      <div className='lg:pl-14'>
        <h2 className='uppercase'>{format(currentDate, 'MMMM yyyy', { locale: selectedLocale })}</h2>
      </div>
      <div className='flex gap-x-3'>
        <button
          onClick={onPrevMonth}
          className='text-2xl'
        >
          ←
        </button>
        <button
          onClick={onNextMonth}
          className='text-2xl'
        >
          →
        </button>
      </div>
    </div>
  )
}

export default CalendarHeader
