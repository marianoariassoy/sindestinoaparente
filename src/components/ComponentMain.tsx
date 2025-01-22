import { useState, useEffect } from 'react'
import Date from './Date'
import ComponentImages from './ComponentImages'
import ComponentInfo from './ComponentInfo'
import { useDataContext } from '../context/useDataContext'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'
import EditionInfo from './EditionInfo'

const Index = ({ category = 1 }: { category: number }) => {
  const { lan } = useDataContext()
  const { data: editions, loading: editionsLoading } = useFetch(`/editions/${lan}`)
  const { data: texts, loading: textsLoading } = useFetch(`/texts/${lan}`)
  const { data: images, loading: imagesLoading } = useFetch(`/images/${lan}`)
  const [currentEditions, setCurrentEditions] = useState([])
  const [currentTexts, setCurrentTexts] = useState([])
  const [currentImages, setCurrentImages] = useState([])
  const [edition, setEdition] = useState(null)
  const [sectionTitle, setSectionTitle] = useState('')

  useEffect(() => {
    if (editions) setCurrentEditions(editions.filter(item => item.category === category))

    if (category === 1) {
      if (lan === 'ESP') setSectionTitle('Seminarios')
      else setSectionTitle('Seminars')
    } else if (category === 2) {
      if (lan === 'ESP') setSectionTitle('Residencias')
      else setSectionTitle('Residencies')
    } else if (category === 3) {
      if (lan === 'ESP') setSectionTitle('Cenas')
      else setSectionTitle('Dinners')
    }
  }, [editions, category, lan])

  useEffect(() => {
    if (texts) setCurrentTexts(texts.filter(item => item.category === category))
  }, [texts, category])

  useEffect(() => {
    if (images) setCurrentImages(images.filter(item => item.category === category))
  }, [images, category])

  return (
    <section className='flex flex-col-reverse lg:flex-row items-start pt-20 lg:pt-0 lg:pl-60'>
      <div className='lg:w-[60%] relative'>
        {imagesLoading ? (
          <Loader />
        ) : (
          <div className='flex flex-col'>
            {edition &&
              editions.map(
                item =>
                  item.id === edition && (
                    <EditionInfo
                      key={item.id}
                      item={item}
                    />
                  )
              )}

            <ComponentImages
              images={currentImages}
              edition={edition}
            />
          </div>
        )}
      </div>

      {textsLoading || editionsLoading ? (
        <Loader />
      ) : (
        <>
          <Date />
          <ComponentInfo
            editions={currentEditions}
            texts={currentTexts}
            title={lan === 'ESP' ? 'Ediciones' : 'Editions'}
            setEdition={setEdition}
            sectionTitle={sectionTitle}
          />
        </>
      )}
    </section>
  )
}

export default Index
