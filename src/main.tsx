import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import Login from './pages/Login/Login.tsx'
import CriarConta from './pages/CriarConta/CriarConta.tsx'
import Anuncios from './pages/Anuncios/Anuncios.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path='/anuncios' element={<Anuncios />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
