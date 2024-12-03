const LabelsItems = ({ text, padding }) => {
  return (
    <div
      style={{
        padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`
      }}
      className='cursor-pointer'
    >
      <div className='bg-acent border-acent font-condensed text-sm lg:text-base px-2'>{text}</div>
    </div>
  )
}

export default LabelsItems
