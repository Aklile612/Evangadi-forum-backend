import { useEffect, useState,createContext } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Routes,Route, useNavigate } from 'react-router-dom'
import axios from './axiosBase'



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
      Navigate("/login")
    }
  }
  
  useEffect(()=>{
    checkuser();
  },[])
  
  
  return (
     <AppState.Provider value={{user,setuser}}>
    <PageState.Provider value={{holdpage,setholdpage}}>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    
    </PageState.Provider>
    </AppState.Provider>
  )
}

export default App
