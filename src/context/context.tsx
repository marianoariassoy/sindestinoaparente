import { useState, createContext } from 'react'

const images = ['/images/landing/1.jpg', '/images/landing/2.jpg', '/images/landing/3.jpg', '/images/landing/4.jpg']
const random = Math.floor(Math.random() * images.length)

export type ContextType = {
  lan: string
  bgimage: string
  setBgimage: (bgimage: string) => void
  setLan: (lan: string) => void
}

export const Context = createContext<ContextType>({
  lan: 'ESP',
  bgimage: images[random],
  setBgimage: () => {},
  setLan: () => {}
})

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lan, setLan] = useState('ESP')
  const [bgimage, setBgimage] = useState(images[random])

  return <Context.Provider value={{ lan, setLan, bgimage, setBgimage }}>{children}</Context.Provider>
}
