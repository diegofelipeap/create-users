import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GLobalStyles } from './styles/GlobalStyles.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GLobalStyles />
    <App />
  </StrictMode>,
)
