import Layout from '../../layout/Layout'
import React, { useState } from 'react'
import Header from './Header'
import Grid from './Grid'
import { Event } from '../../types/Types'
import { addMonths, subMonths } from 'date-fns'

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const events: Event[] = [
    {
      id: 1,
      type: 1,
      title: 'SUAVE DESLIZ',
      description: `Edicion 03
      Comité
      Reconquista 19 hs.`,
      date: '2024-11-20',
      url: 'xxx'
    },
    {
      id: 2,
      title: 'test 2',
      description: 'description 2',
      date: '2024-11-22',
      type: 1
    },
    {
      id: 3,
      title: 'test 2',
      description: 'description 2',
      date: '2024-11-11',
      type: 2
    },
    {
      id: 4,
      title: 'test 2',
      description: 'description 2',
      date: '2024-11-12',
      type: 2
    }
  ]

  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  return (
    <Layout>
      <section className='px-3 lg:pl-60 lg:h-screen flex flex-col'>
        <Header
          currentDate={currentDate}
          onNextMonth={handleNextMonth}
          onPrevMonth={handlePrevMonth}
        />
        <Grid
          currentDate={currentDate}
          events={events}
        />
      </section>
    </Layout>
  )
}

export default Calendar
