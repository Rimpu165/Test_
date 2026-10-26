import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Serachprovider from './SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Serachprovider>
    <App />
     </Serachprovider>
  </StrictMode>,
)
