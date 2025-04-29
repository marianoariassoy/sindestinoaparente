export interface Event {
  id: number
  category: number
  title: string
  subtitle: string
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
