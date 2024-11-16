import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay, isToday } from 'date-fns'
import { Event } from '../../types/Event'

interface CalendarGridProps {
  currentDate: Date
  events: Event[]
  onAddEvent: (event: Event) => void
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, events, onAddEvent }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  })

  const handleDayClick = (date: Date) => {
    const title = prompt('Título del evento:')
    if (title) {
      const newEvent: Event = {
        id: `${date.toISOString()}-${title}`,
        title,
        date: date.toISOString()
      }
      onAddEvent(newEvent)
    }
  }

  return (
    <div className='grid grid-cols-7 h-full pb-3'>
      {days.map(day => {
        const isCurrentDay = isToday(day) // Verificar si es el día actual
        return (
          <div
            key={day.toISOString()}
            className={`border border-black p-2 cursor-pointer hover:bg-gray-100 ${
              isCurrentDay
                ? 'bg-primary' // Estilo para el día actual
                : ''
            }`}
            onClick={() => handleDayClick(day)}
          >
            <span>{format(day, 'd')}</span>
            <div className='mt-2 space-y-1'>
              {events
                .filter(event => isSameDay(new Date(event.date), day))
                .map(event => (
                  <div
                    key={event.id}
                    className='text-xs bg-blue-500 text-white rounded px-2 py-1'
                  >
                    {event.title}
                  </div>
                ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CalendarGrid
