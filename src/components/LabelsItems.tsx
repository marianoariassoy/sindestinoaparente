import { useState } from 'react'

const LabelsItems = ({ text, padding }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    isOpen && (
      <div
        style={{
          padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`
        }}
        onClick={() => setIsOpen(false)}
        className='cursor-pointer'
      >
        <div className='bg-acent border-acent font-condensed text-sm lg:text-base px-2'>{text}</div>
      </div>
    )
  )
}

export default LabelsItems
