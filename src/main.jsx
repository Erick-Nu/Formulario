import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import formulario from './componentes/Formulario'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <formulario />
  </StrictMode>,
)
