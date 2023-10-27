import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <BrowserRouter>
      <React.StrictMode>
      <App className=" transition-all duration-300"/>
    </React.StrictMode>
    </BrowserRouter>
  </DarkModeProvider>



)
