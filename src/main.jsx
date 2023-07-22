import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Bnk48Home from './components/Page/Bnk48Home.jsx'
import "../src/reset.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
    <Route path='/bnk48' element={<Bnk48Home />} />
    <Route path='/' element={<App />} />
    </Routes>
   
    </BrowserRouter>

  </React.StrictMode>,
)
