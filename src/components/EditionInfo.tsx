const EditionInfo = ({ item, lan }) => {
  if (!item.subtitle) return null

  return (
    <section className='p-4 lg:p-8 flex flex-col gap-y-8 my-8'>
      <div>
        <h1 className='underline text-2xl lg:text-3xl text-center'>{item.subtitle}</h1>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {item.edition && (
          <div>
            <h2 className='underline'>{lan === 'ESP' ? 'Nº de Edición' : 'Edition Number'}</h2>
            {item.edition}
          </div>
        )}
        {item.date && (
          <div>
            <h2 className='underline'>{lan === 'ESP' ? 'Fecha' : 'Date'}</h2>
            {item.date}
          </div>
        )}
        {item.hour && (
          <div>
            <h2 className='underline'>{lan === 'ESP' ? 'Hora y Lugar' : 'Time and Place'}</h2>
            {item.hour}
          </div>
        )}
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {item.participate && (
          <div>
            <h2 className='underline'>{lan === 'ESP' ? 'Participan' : 'Participate'}</h2>
            {item.participate}
          </div>
        )}
        {item.language && (
          <div>
            <h2 className='underline'>{lan === 'ESP' ? 'Idioma' : 'Language'}</h2>
            {item.language}
          </div>
        )}
        {item.price && (
          <div>
            <h2 className='underline'>{lan === 'ESP' ? 'Precio' : 'Price'}</h2>
            {item.price}
          </div>
        )}
      </div>
    </section>
  )
}

export default EditionInfo
