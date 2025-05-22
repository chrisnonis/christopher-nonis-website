import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import MainApp from './MainApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </StrictMode>,
) 