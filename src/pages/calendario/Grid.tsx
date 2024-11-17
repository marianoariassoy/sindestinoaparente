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
    <div
      className='grid grid-cols-4 lg:grid-cols-7 h-full pb-3 
    
    [&>div:nth-child(4n)]:border-r-0 lg:[&>div:nth-child(4n)]:border-r lg:[&>div:nth-child(7n)]:border-r-0 [&>div:nth-child(n+29)]:border-b-0  '
    >
      {days.map(day => {
        const isCurrentDay = isToday(day)
        return (
          <div
            key={day.toISOString()}
            className={`border-b border-r border-black p-2 cursor-pointer hover:bg-gray-100 ${
              isCurrentDay ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleDayClick(day)}
          >
            <span className='text-3xl lg:text-5xl font-condensed'>{format(day, 'd')}</span>
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
