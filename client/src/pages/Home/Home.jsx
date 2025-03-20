import React, { useContext, useState } from 'react'
import { AppState } from '../../App'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import classes from "../Home/Home.module.css"
import Howitworks from '../How it works/Howitworks'
import { PageState } from '../../App';
import Register from '../Register/Register'

const Home = () => {
  const {user}=useContext(AppState)
  const {holdpage,setholdpage}=useContext(PageState);
  console.log(holdpage)
  console.log(user)
  
  return (
    <>
    <div className={classes.home}>
    
    <Header/>
      <div style={{paddingTop:"100px"}}>
      </div>
      <div className={classes.loginhow}>
      {/* <Register/> */}
      {holdpage==="true"?<Login/>:<Register className={classes.customRegister}/>}
      <Howitworks/>
      </div>
      
    
     
      
     
      <Footer/>
    </div>
    </>
  )
}



export default Home
