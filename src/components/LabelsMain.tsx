import LabelsItems from './LabelsItems'

const LabelsMain = ({ labels }) => {
  function generateRandomPadding(count: number) {
    return Array.from({ length: count }, () => ({
      left: Math.round(Math.random() * 80),
      right: Math.round(Math.random() * 80),
      top: Math.round(Math.random() * 80),
      bottom: Math.round(Math.random() * 50)
    }))
  }

  const padding = generateRandomPadding(labels.length)

  return (
    <div className='absolute w-full z-50'>
      {labels.map((item, index) => (
        <LabelsItems
          key={index}
          padding={padding[index]}
          text={item.description}
        />
      ))}
    </div>
  )
}

export default LabelsMain
