import React from 'react'
import ReactDOM from 'react-dom/client'
import { FELVUP }from './FELVUP.tsx'
import './FELVUP.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root-lv')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <FELVUP />
    </BrowserRouter>
  </React.StrictMode>,
)
