import { useState } from 'react'
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay, isToday } from 'date-fns'
import { Event } from '../../types/Types'

interface CalendarGridProps {
  currentDate: Date
  events: Event[]
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
    [&>div:nth-child(4n)]:border-r-0 lg:[&>div:nth-child(4n)]:border-r lg:[&>div:nth-child(7n)]:border-r-0 [&>div:nth-child(n+29)]:border-b-0'
    >
      {days.map((day, index) => {
        const isCurrentDay = isToday(day)
        const hasMatchingDate = events.some(event => isSameDay(new Date(event.date), day))

        return (
          <div
            key={index}
            className={`aspect-square lg:aspect-auto border-b border-r border-black relative ${
              isCurrentDay ? 'bg-gray-100' : ''
            }`}
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
                          className='text-3xl lg:text-6xl font-condensed text-secondary text-shadow-secondary w-full h-full items-start flex p-2 hover:bg-gray-100'
                          onClick={() => setSelectedEvent(format(day, 'd'))}
                        >
                          {format(day, 'd')}
                        </button>
                        <div
                          className={`absolute z-30 top-6 left-6 flex flex-col gap-y-3 text-sm bg-primary border-primary  ${
                            format(day, 'd') === selectedEvent ? 'block' : 'hidden'
                          }`}
                        >
                          <span>{event.title}</span>
                          <span>{event.description}</span>
                          {event.url && (
                            <span>
                              <a
                                href={event.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline'
                              >
                                INSCRIPCION
                              </a>
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className='text-secondary text-sm p-2 flex flex-col h-full gap-y-6'>
                        <span className='font-condensed text-2xl lg:text-4xl'>{format(day, 'd')}</span>
                        <span>{event.title}</span>
                      </div>
                    )}
                  </div>
                ))
            ) : (
              <span className='text-3xl lg:text-6xl font-condensed p-2 block'>{format(day, 'd')}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CalendarGrid
