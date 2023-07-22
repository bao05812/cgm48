import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/header'
import Member from './components/Content/Member'
import Footer from './components/Footer/Footer'
import Angel from './components/Members/Angel'

import dataMember from './components/dataMember/dataMember'
function App() {
  const newstage = dataMember.map( val => val.stage.toLowerCase())
  return (
    <div>
      <Header />
      <Routes>
            <Route path='/' element={<Member />}/>
            {newstage.map(path => <Route path={path} element={ <Angel/>}/>)}
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
