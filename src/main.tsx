import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Index from '@/pages/index'
import Login from '@/pages/login'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
