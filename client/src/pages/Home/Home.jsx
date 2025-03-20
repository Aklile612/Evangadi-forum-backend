import React, { useContext, useState } from 'react'
import { AppState } from '../../App'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import classes from "../Home/Home.module.css"
import Howitworks from '../How it works/Howitworks'


const Home = () => {
  const {user}=useContext(AppState)
  console.log(user)
  const [holdpage,setholdpage]=useState("login")
  return (
    <>
    <div className={classes.home}>

    <Header/>
      <div style={{paddingTop:"100px"}}>
      </div>
      <div className={classes.loginhow}>

      <Login />
      <Howitworks/>
      </div>
      
    
     
      
     
      <Footer/>
    </div>
    </>
  )
}



export default Home
