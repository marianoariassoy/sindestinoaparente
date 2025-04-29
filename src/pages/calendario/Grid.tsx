import { useState } from 'react'
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isToday, startOfWeek, endOfWeek } from 'date-fns'
import { Event } from '../../types/Types'

interface CalendarGridProps {
  currentDate: Date
  events: Event[]
  lan: string
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, events, lan }) => {
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate), { weekStartsOn: 0 }),
    end: endOfWeek(endOfMonth(currentDate), { weekStartsOn: 0 })
  })

  const [selectedEvent, setSelectedEvent] = useState('')
  const weekDays =
    lan === 'ESP'
      ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
      : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <section className='overflow-x-auto'>
      <div className='grid grid-cols-7 pb-3 [&>div:nth-child(2n)]:border-r [&>div:nth-child(7n)]:border-r-0 min-w-[1000px]'>
        {weekDays.map((dayName, index) => (
          <div
            key={index}
            className='py-2 pl-2 border-r border-b border-black'
          >
            {dayName}
          </div>
        ))}

        {days.map((day, index) => {
          const isCurrentDay = isToday(day)
          const hasMatchingDate = events.some(event => format(day, 'yyyy-MM-dd') == event.date)
          const isOutsideMonth = day.getMonth() !== currentDate.getMonth()

          return (
            <div
              key={index}
              className={`aspect-square border-b border-r border-black relative ${
                isCurrentDay ? 'bg-primary/40' : ''
              } `}
            >
              {isOutsideMonth ? (
                <div className='p-2 opacity-20 text-3xl lg:text-6xl font-condensed'>{format(day, 'd')}</div>
              ) : hasMatchingDate ? (
                events
                  .filter(event => format(day, 'yyyy-MM-dd') == event.date)
                  .map(event => (
                    <div
                      key={event.id}
                      className='h-full w-full'
                    >
                      {event.title ? (
                        <button
                          onClick={() => setSelectedEvent(format(day, 'd'))}
                          className='p-2 w-full h-full bg-black/10 cursor-pointer flex items-start justify-start text-left'
                        >
                          {event.subtitle ? (
                            <div className='text-black text-sm flex flex-col h-full'>
                              <span className='font-condensed text-xl lg:text-2xl'>{format(day, 'd')}</span>
                              <span className='leading-4'>{event.subtitle}</span>
                            </div>
                          ) : (
                            <div className='text-3xl lg:text-6xl font-condensed'>{format(day, 'd')}</div>
                          )}
                          <div
                            className={`absolute cursor-pointer z-30 leading-4 top-6 left-6 flex flex-col gap-y-3 text-sm bg-primary border-primary ${
                              format(day, 'd') === selectedEvent ? 'block' : 'hidden'
                            }`}
                            onClick={() => setSelectedEvent(null)}
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
                        </button>
                      ) : (
                        <div className='p-2 w-full h-full flex items-start justify-start text-left'>
                          {event.subtitle ? (
                            <div className='text-secondary text-sm flex flex-col h-full'>
                              <span className='font-condensed text-xl lg:text-2xl'>{format(day, 'd')}</span>
                              <span className='leading-4'>{event.subtitle}</span>
                            </div>
                          ) : (
                            <div className='text-3xl lg:text-6xl font-condensed'>{format(day, 'd')}</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))
              ) : (
                <div className='text-3xl lg:text-6xl font-condensed p-2'>{format(day, 'd')}</div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CalendarGrid
