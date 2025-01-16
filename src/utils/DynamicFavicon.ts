import { useEffect } from 'react'

const DynamicFavicon = () => {
  useEffect(() => {
    const updateFavicon = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      const favicon = document.getElementById('favicon') as HTMLLinkElement
      favicon.href = isDarkMode ? '/favicon-dark.png' : '/favicon-light.png'
    }

    // Detectar cambios en el tema del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateFavicon)

    // Actualizar el favicon al cargar
    updateFavicon()

    // Limpieza del evento al desmontar el componente
    return () => mediaQuery.removeEventListener('change', updateFavicon)
  }, [])

  return null // Este componente no necesita renderizar nada
}

export default DynamicFavicon
