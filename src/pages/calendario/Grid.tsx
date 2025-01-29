import { useState, useEffect } from 'react'
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay, isToday } from 'date-fns'
import { Event } from '../../types/Types'
import { useDataContext } from '../../context/useDataContext'
import { es, enUS } from 'date-fns/locale'

interface CalendarGridProps {
  currentDate: Date
  events: Event[]
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, events }) => {
  const { lan } = useDataContext()
  const [selectedLocale, setSelectedLocale] = useState(es)

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate)
  })

  const [selectedEvent, setSelectedEvent] = useState('')

  useEffect(() => {
    if (lan === 'ESP') setSelectedLocale(es)
    else if (lan === 'ENG') setSelectedLocale(enUS)
    else setSelectedLocale(es)
  }, [lan])

  return (
    <div
      className='grid grid-cols-3 lg:grid-cols-7 h-full pb-3 
    [&>div:nth-child(3n)]:border-r-0 lg:[&>div:nth-child(3n)]:border-r lg:[&>div:nth-child(7n)]:border-r-0'
    >
      {days.map((day, index) => {
        const isCurrentDay = isToday(day)
        const hasMatchingDate = events.some(event => isSameDay(new Date(event.date), day))

        return (
          <div
            key={index}
            className={`aspect-square lg:aspect-auto border-b border-r border-black relative ${
              isCurrentDay ? 'bg-primary' : ''
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
                    {event.category === 1 ? (
                      <div className='p-2'>
                        <span className='first-letter:uppercase'>
                          {format(day, 'eeee', { locale: selectedLocale })}
                        </span>
                        <button
                          className='text-3xl lg:text-6xl font-condensed text-secondary text-shadow-secondary w-full h-full items-start flex  hover:opacity-70'
                          onClick={() => setSelectedEvent(format(day, 'd'))}
                        >
                          {format(day, 'd')}
                        </button>
                        <div
                          className={`absolute z-30 leading-4 top-6 left-6 flex flex-col gap-y-3 text-sm bg-primary border-primary  ${
                            format(day, 'd') === selectedEvent ? 'block' : 'hidden'
                          }`}
                        >
                          <span className='font-bold'>{event.title}</span>
                          <span>{event.description}</span>
                          {event.url && (
                            <span>
                              <a
                                href={event.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline'
                              >
                                LINK
                              </a>
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className='text-secondary text-sm p-2 flex flex-col h-full lg:gap-y-1'>
                        <span className='first-letter:uppercase'>
                          {format(day, 'eeee', { locale: selectedLocale })}
                        </span>
                        <span className='font-condensed text-2xl lg:text-4xl'>{format(day, 'd')}</span>
                        <span className='leading-4'>{event.title}</span>
                      </div>
                    )}
                  </div>
                ))
            ) : (
              <div className='flex flex-col p-2'>
                <span className='first-letter:uppercase'>{format(day, 'eeee', { locale: selectedLocale })}</span>
                <span className='text-3xl lg:text-6xl font-condensed'>{format(day, 'd')}</span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CalendarGrid
