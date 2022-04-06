import React from 'react'
import { createRoot } from 'react-dom/client'
import Index from '@/pages/index'
import Login from '@/pages/login'
import SignUp from '@/pages/signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
