interface CloseButtonProps {
  onClick: () => void
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      className='close-button transition-transform'
      onClick={onClick}
      aria-label='Cerrar'
    >
      <span className='cross'></span>
    </button>
  )
}

export default CloseButton
