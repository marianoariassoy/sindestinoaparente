const EditionInfo = ({ item }) => {
  if (!item.subtitle) return null

  return (
    <section className='p-4 lg:p-8 flex flex-col gap-y-8 my-8'>
      <div>
        <h1 className='underline text-2xl lg:text-3xl text-center'>{item.subtitle}</h1>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {item.edition && (
          <div>
            <h2 className='underline'>N de Edición</h2>
            {item.edition}
          </div>
        )}
        {item.date && (
          <div>
            <h2 className='underline'>Fecha</h2>
            {item.date}
          </div>
        )}
        {item.hour && (
          <div>
            <h2 className='underline'>Hora y Lugar</h2>
            {item.hour}
          </div>
        )}
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {item.participate && (
          <div>
            <h2 className='underline'>Partipan</h2>
            {item.participate}
          </div>
        )}
        {item.language && (
          <div>
            <h2 className='underline'>Idioma</h2>
            {item.language}
          </div>
        )}
        {item.price && (
          <div>
            <h2 className='underline'>Precio</h2>
            {item.price}
          </div>
        )}
      </div>
    </section>
  )
}

export default EditionInfo
