import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import UserContext from './context/UserContext.jsx'
import axios from "axios"

axios.defaults.withCredentials = true
axios.defaults.baseURL = "https://virtualassistant-backend-zaoi.onrender.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContext>
        <App />
      </UserContext>
    </BrowserRouter>
  </StrictMode>
)
