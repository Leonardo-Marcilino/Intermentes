import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './root.css'
import Header from './assets/Componentes/Header/Header'
import Footer from './assets/Componentes/Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
)
