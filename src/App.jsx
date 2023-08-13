import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Loading from './01-Loading/Loading';
import Login from './02-Login/Login';
import Home from './03-Home/home';
import './App.css'

function App() { 

  return (
    <Routes>
      <Route path="/" element={<Loading/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App
