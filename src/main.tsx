import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/animations.css'
import App from './App.tsx'
import { ContextProvider } from './context/context'
import DynamicFavicon from './utils/DynamicFavicon'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <DynamicFavicon />
      <App />
    </ContextProvider>
  </StrictMode>
)
