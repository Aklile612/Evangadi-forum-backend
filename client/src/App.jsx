import { useEffect, useState,createContext } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Routes,Route, useNavigate } from 'react-router-dom'
import axios from './axiosBase'
import Home from './pages/Home/Home'



export const AppState=createContext();
export const PageState=createContext();
function App() {
  const [user,setuser]=useState({}) ;
  const [holdpage,setholdpage]=useState("true")
  const token = localStorage.getItem("token");
  const Navigate=useNavigate();
  async function checkuser() {
    try {
      const {data}=await axios.get("/users/check",{
        headers:{
          Authorization: 'Bearer '+ token
        }
      })
      setuser(data)
     
      
    } catch (error) {
      console.log(error)
      Navigate("/")
    }
  }
  
  useEffect(()=>{
    checkuser();
  },[])
  
  
  return (
     <AppState.Provider value={{user,setuser}}>
    <PageState.Provider value={{holdpage,setholdpage}}>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    
    </PageState.Provider>
    </AppState.Provider>
  )
}

export default App
