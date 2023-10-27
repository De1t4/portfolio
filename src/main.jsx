import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeProvider } from './context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <BrowserRouter>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <App className=" transition-all duration-300"/>
        </I18nextProvider>
    </React.StrictMode>
    </BrowserRouter>
  </DarkModeProvider>



)
