import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)

//Strictmode : it mostly used for debugging, ye mostly cheeje do baar call krta h id u check the console u get to know