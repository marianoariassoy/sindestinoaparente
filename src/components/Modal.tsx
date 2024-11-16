const Modal = ({ currentImage, setCurrentImage }) => {
  const handelClick = () => {
    setCurrentImage(null)
  }
  return (
    <div
      className='fixed top-0 left-0 h-screen w-screen grid place-items-center z-50 p-6'
      onClick={handelClick}
    >
      <div className='h-[80vh] cursor-pointer object-contain border-primary'>
        <img
          src={currentImage}
          className='h-full w-auto object-cover '
        />
      </div>
    </div>
  )
}

export default Modal
