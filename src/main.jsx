import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import NoteApp from './NoteApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteApp />
    </BrowserRouter>
  </React.StrictMode>,
)
