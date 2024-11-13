interface CloseButtonProps {
  onClick: () => void
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      className='close-button'
      onClick={onClick}
      aria-label='Cerrar'
    >
      <span className='cross'></span>
    </button>
  )
}

export default CloseButton
