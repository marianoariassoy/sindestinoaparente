import React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
// import { useDataContext } from '../../context/useDataContext'

interface CalendarHeaderProps {
  currentDate: Date
  onNextMonth: () => void
  onPrevMonth: () => void
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, onNextMonth, onPrevMonth }) => {
  // const { lan } = useDataContext()

  return (
    <div className='flex items-center justify-between mb-6'>
      <button
        onClick={onPrevMonth}
        className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'
      >
        ←
      </button>
      <h2 className=''>{format(currentDate, 'MMMM yyyy', { locale: es })}</h2>
      <button
        onClick={onNextMonth}
        className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'
      >
        →
      </button>
    </div>
  )
}

export default CalendarHeader
