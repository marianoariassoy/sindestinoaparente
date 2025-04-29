const useHTML = ({ text }) => {
  return (
    <div
      className='leading-5'
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default useHTML
