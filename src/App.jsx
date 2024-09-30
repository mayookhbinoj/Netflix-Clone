import { useEffect, useState } from 'react'
import Home from "../src/components/Pages/Home/Home"
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from"../src/components/Pages/Login/Login"
import Player from './components/Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'

function App() {

  const navigate=useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("log in ")
        navigate("/")
      }else{
        console.log("log out")
        navigate("/login")
      }
    })
  },[])



  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/player/:id" element={<Player/>}/>
     

    </Routes>
      
    </>
  )
}

export default App
