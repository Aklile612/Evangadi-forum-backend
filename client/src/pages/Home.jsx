import React, { useContext } from 'react'
import { AppState } from '../App'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Login from './Login/Login'




const Home = () => {
  const {user}=useContext(AppState)
  console.log(user)
  return (
    <>
    <Header/>
      <div style={{paddingTop:"100px"}}>
        Home
      </div>
      <Login/>
      
    
     
      <h1>{user.username}</h1>
     
      <Footer/>
    </>
  )
}



export default Home
