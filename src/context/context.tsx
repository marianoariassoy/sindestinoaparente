import { useState, createContext, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

export const Context = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading } = useFetch(`/home`)
  const [lan, setLan] = useState<string>('ESP')
  const [bgImage, setBgImage] = useState({})

  useEffect(() => {
    if (!loading) setBgImage(data.image)
  }, [data, loading])

  return <Context.Provider value={{ lan, setLan, bgImage, setBgImage }}>{children}</Context.Provider>
}
