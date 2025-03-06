import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Home} from './Home'
import {Atment} from './Atment'

function App() {
  

  return (
    <>
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/atment' element={<Atment />}/>
      </Routes>
    </>
  )
}

export default App
