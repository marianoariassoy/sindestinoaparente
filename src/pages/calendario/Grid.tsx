import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay, isToday } from 'date-fns'
import { Event } from '../../types/Event'

interface CalendarGridProps {
  currentDate: Date
  events: Event[]
  onAddEvent: (event: Event) => void
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, events }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  })

  return (
    <div
      className='grid grid-cols-4 lg:grid-cols-7 h-full pb-3 
    
    [&>div:nth-child(4n)]:border-r-0 lg:[&>div:nth-child(4n)]:border-r lg:[&>div:nth-child(7n)]:border-r-0 [&>div:nth-child(n+29)]:border-b-0  '
    >
      {days.map(day => {
        const isCurrentDay = isToday(day)
        const hasMatchingDate = events.some(event => isSameDay(new Date(event.date), day))

        return (
          <div
            key={day.toISOString()}
            className={`border-b border-r border-black p-2 
              ${isCurrentDay ? 'bg-gray-100' : ''} 
              ${hasMatchingDate ? 'hover:bg-gray-100 cursor-pointer' : ''}`}
          >
            {hasMatchingDate ? (
              <span className='text-3xl lg:text-5xl font-condensed text-tertiary '>{format(day, 'd')}</span>
            ) : (
              <span className='text-3xl lg:text-5xl font-condensed'>{format(day, 'd')}</span>
            )}

            {events
              .filter(event => isSameDay(new Date(event.date), day))
              .map(event => (
                <div
                  key={event.id}
                  className='text-sm bg-primary px-2 py-1 absolute'
                >
                  {event.title}
                </div>
              ))}
          </div>
        )
      })}
    </div>
  )
}

export default CalendarGrid
