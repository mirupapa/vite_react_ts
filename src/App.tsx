import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/expenses">Expenses</Link>
    </div>
  )
}

export default App
