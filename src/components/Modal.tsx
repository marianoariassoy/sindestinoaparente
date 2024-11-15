const Modal = ({ currentImage, setCurrentImage }) => {
  const handelClick = () => {
    setCurrentImage(null)
  }
  return (
    <div
      className='fixed top-0 left-0 h-screen w-screen grid place-items-center z-50 p-6'
      onClick={handelClick}
    >
      <div className='border-primary h-[80vh] w-auto cursor-pointer'>
        <img
          src={currentImage}
          className='h-full'
        />
      </div>
    </div>
  )
}

export default Modal
