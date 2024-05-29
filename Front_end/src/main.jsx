import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './root.css'
import Header from './assets/Componentes/Header/Header'
import Footer from './assets/Componentes/Footer/Footer'
import Beneficiario from './assets/Pages/Beneficiario/Beneficiario'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Beneficiario />
    <Footer />
  </React.StrictMode>
)
