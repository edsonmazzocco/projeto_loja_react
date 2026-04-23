import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import Home from './pages/Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import CriarConta from './pages/CriarConta/CriarConta.tsx'
import Anuncios from './pages/Anuncios/Anuncios.tsx'
import FormAnuncios from './pages/FormAnuncios/FormAnuncios.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path='/anuncios' element={<Anuncios />} />
        <Route path='/anuncios/cadastro' element={<FormAnuncios />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
