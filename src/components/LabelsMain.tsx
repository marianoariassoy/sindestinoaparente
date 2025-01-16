import LabelsItems from './LabelsItems'

const LabelsMain = ({ labels }) => {
  return (
    <div className='absolute w-full z-50'>
      {labels.map((item, index) => (
        <LabelsItems
          key={index}
          text={item.description}
        />
      ))}
    </div>
  )
}

export default LabelsMain
