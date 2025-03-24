import { useEffect, useState,createContext } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Routes,Route, useNavigate } from 'react-router-dom'
import axios from './axiosBase'
import Home from './pages/Home/Home'
import QuestionPage from './pages/Question/QuestionPage'
import AnswerPage from './pages/AnswerPage/AnswerPage'


export const QuestionState=createContext();
export const AppState=createContext();
export const PageState=createContext();
function App() {
  const [holdindex,setholdindex]=useState("")
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
    <QuestionState.Provider value={{holdindex,setholdindex}}>
     <AppState.Provider value={{user,setuser}}>
    <PageState.Provider value={{holdpage,setholdpage}}>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/askquestion' element={<QuestionPage/>}/>
        <Route path='/answerpage/:id' element={<AnswerPage/>}/>
      </Routes>
    </PageState.Provider>
    </AppState.Provider>
    </QuestionState.Provider>
  )
}

export default App
