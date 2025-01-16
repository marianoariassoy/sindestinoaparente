import LabelsItems from './LabelsItems'

const Labels = ({ labels }) => {
  return (
    <div className='absolute z-20 px-3 top-0 pt-20 flex flex-col gap-y-6'>
      {labels.map((item, index) => (
        <LabelsItems
          key={index}
          text={item.description}
        />
      ))}
    </div>
  )
}

export default Labels
