import React from 'react'
import ReactDOM from 'react-dom/client'
import {TigerPunkApp} from './TigerPunkApp.tsx'
import './TigerApp.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <TigerPunkApp />
    </BrowserRouter>
  </React.StrictMode>,
)
