import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar } from './Navbar'
import { Fondo } from './fondo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Fondo />
  </React.StrictMode>,
)
