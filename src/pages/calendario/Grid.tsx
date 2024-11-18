import { useState } from 'react'
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

  const [selectedEvent, setSelectedEvent] = useState('')

  return (
    <div
      className='grid grid-cols-4 lg:grid-cols-7 h-full pb-3 
    
    [&>div:nth-child(4n)]:border-r-0 lg:[&>div:nth-child(4n)]:border-r lg:[&>div:nth-child(7n)]:border-r-0 [&>div:nth-child(n+29)]:border-b-0  '
    >
      {days.map((day, index) => {
        const isCurrentDay = isToday(day)
        const hasMatchingDate = events.some(event => isSameDay(new Date(event.date), day))

        return (
          <div
            key={index}
            className={`border-b border-r border-black relative ${isCurrentDay ? 'bg-gray-100' : ''}`}
          >
            {hasMatchingDate ? (
              events
                .filter(event => isSameDay(new Date(event.date), day))
                .map(event => (
                  <div
                    key={event.id}
                    className='h-full w-full'
                  >
                    {event.type === 1 ? (
                      <>
                        <button
                          className='text-3xl lg:text-5xl font-condensed text-red-500 w-full h-full items-start flex p-2 hover:bg-gray-100'
                          onClick={() => setSelectedEvent(format(day, 'd'))}
                        >
                          {format(day, 'd')}
                        </button>
                        <div
                          className={`flex flex-col text-sm bg-primary px-2 py-1 absolute top-6 ${
                            format(day, 'd') === selectedEvent ? 'block' : 'hidden'
                          }`}
                        >
                          <span>{event.title}</span>
                          <span>{event.description}</span>
                        </div>
                      </>
                    ) : (
                      <div className='text-secondary text-sm p-2 flex flex-col h-full justify-between gap-2'>
                        <span className='font-condensed text-3xl'>{format(day, 'd')}</span>
                        <span>{event.title}</span>
                      </div>
                    )}
                  </div>
                ))
            ) : (
              <span className='text-3xl lg:text-5xl font-condensed p-2 block'>{format(day, 'd')}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CalendarGrid
