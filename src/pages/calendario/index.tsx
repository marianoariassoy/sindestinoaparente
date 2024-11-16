import Layout from '../../layout/Layout'
import React, { useState } from 'react'
import Header from './Header'
import Grid from './Grid'
import { Event } from '../../types/Event'
import { addMonths, subMonths } from 'date-fns'

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Event[]>([])

  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const handleAddEvent = (newEvent: Event) => setEvents([...events, newEvent])

  return (
    <Layout>
      <section className='px-3 lg:pl-60 h-screen flex flex-col'>
        <Header
          currentDate={currentDate}
          onNextMonth={handleNextMonth}
          onPrevMonth={handlePrevMonth}
        />
        <Grid
          currentDate={currentDate}
          events={events}
          onAddEvent={handleAddEvent}
        />
      </section>
    </Layout>
  )
}

export default Calendar
