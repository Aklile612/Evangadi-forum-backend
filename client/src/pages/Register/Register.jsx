import React, { useState,useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from '../../axiosBase'
import classes from "./Register.module.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { PageState } from '../../App'
const Register = () => {
    const {holdpage,setholdpage}=useContext(PageState);
    const changestate=()=>{
        if(holdpage==="false"){
            setholdpage("true")
        }else{
            setholdpage("false")
        }
        }
  const Navigate=useNavigate()
  const [formData,setformData]= useState({
    "username":"",
    "firstname":"",
    "lastname":"",
    "email":"",
    "password":""
  })
  const handleChange=(event)=>{
    setformData({
        ...formData,
        [event.target.name]:event.target.value,
    })
  }
  async function handleSubmit(event){
    event.preventDefault();
    const usernameValue=formData.username;
    const firstnameValue=formData.firstname;
    const lastnameValue=formData.lastname;
    const emailValue=formData.email;
    const passwordValue=formData.password;
    if(!usernameValue||!firstnameValue||!lastnameValue||!emailValue||!passwordValue){
        alert("please provide all data")
        return
    }
    try {
        await axios.post("/users/register",{
            username:usernameValue,
            firstname:firstnameValue,
            lastname:lastnameValue,
            email:emailValue,
            password:passwordValue
        })
        alert("user registered successfully please logIn")
        Navigate("/login")
    } catch (error) {
        console.log(error)  
    }
  }
  return (
    <>
    {/* <Header/> */}
    <div className={classes.registercard}>

    <section >
        <div className={classes.headers}>

        <h3>Join The Network</h3>
        <div className={classes.signin}>Already have an account? <Link to="/" onClick={changestate} className={classes.textcolor}>SignIn</Link></div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className={classes.email}>
                
                <input type="email" placeholder='Email'
                value={formData.email}
                name='email'
                onChange={handleChange}
                />
            </div>
            
            <br/>
            <div className={classes.firstandlast}>

                <div className={classes.firstname}>
                    
                    <input type="text" placeholder='First name'
                    value={formData.firstname}
                    name='firstname'
                    onChange={handleChange}
                    />
                </div>
                <br/>
                <div className={classes.lastname}>
                    
                    <input type="text" placeholder='Lastname'
                    value={formData.lastname}
                    name='lastname'
                    onChange={handleChange}
                    />
                </div>
            </div>
            <br />
            <div className={classes.username}>
                
                <input type="text" 
                placeholder='Username'
                value={formData.username}
                name='username'
                onChange={handleChange}
                />
            </div>
            <br />
            <div className={classes.password}>
                
                <input type="password" placeholder='Password'
                value={formData.password}
                name='password'
                onChange={handleChange}
                />
            </div>
            <br />
            <button type='submit' className={classes.submit}><p>Agree and Continue</p></button>
            <div className={classes.privacy}>
                
                <p>I agree to <Link to="/privacy" className={classes.textcolor}>privacy policy</Link> and <Link to="/termsofservice" className={classes.textcolor}>terms of service</Link>.</p>
            </div>
            <div className={classes.already}>
            <p> <Link to="/login" className={classes.textcolor}>Already have an account?</Link></p>

            </div>
        </form>
    </section>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Register
