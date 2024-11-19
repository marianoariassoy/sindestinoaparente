export interface Event {
  id: number
  type: number
  title: string
  description?: string
  date: string // Formato ISO (e.g., "2024-11-16")
  url?: string
}

export interface ItemHomeProps {
  title: string
  description: string
  image: string
  url: string
}
