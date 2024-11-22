import Layout from '../../layout/Layout'
import React, { useState } from 'react'
import Header from './Header'
import Grid from './Grid'
import { addMonths, subMonths } from 'date-fns'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

const Calendar: React.FC = () => {
  const { lan } = useDataContext()
  const [currentDate, setCurrentDate] = useState(new Date())
  const { data, loading } = useFetch(`/calendar/${lan}`)

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
        {loading ? (
          <Loader />
        ) : (
          <Grid
            currentDate={currentDate}
            events={data}
          />
        )}
      </section>
    </Layout>
  )
}

export default Calendar
