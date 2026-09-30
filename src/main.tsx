import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

document.documentElement.style.setProperty('--clink-logo', `url(${import.meta.env.BASE_URL}images/logo/clink-logo.jpg)`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
