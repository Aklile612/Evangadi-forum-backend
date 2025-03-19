import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from '../../axiosBase'
import '../Login/Login.css'
const Login = () => {
  const Navigator=useNavigate();
  const[formData,setformData]=useState({
    "email":"",
   "password":""
  })
  const handleChange=(event)=>{
    setformData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const emailValue=formData.email;
    const passwordValue=formData.password;
    if (!emailValue||!passwordValue){
      alert("enter all data")
      return;
    }

    try {
      const {data}=await axios.post("/users/login",{
        email:emailValue,
        password:passwordValue
        

      }
    )
    alert(" Loged IN-> Home page")
    // Navigator("/")
    localStorage.setItem("token",data.token)
    } catch (error) {
      console.log(error)
      alert("please enter the correct data")
    }
    // console.log(formData)
    
  }

  
  return (
    <div className='logincard'>
      
    <section>
      <h3 className='text'> Login into your Account</h3>
      <h4 className='text'>Don't have an account?<Link to="/register" className='textcolor'>Create a New account</Link> </h4>
      <form onSubmit={handleSubmit}>
        <div className='email'>
         
          <input
          type="email"
          name='email'
          onChange={handleChange}
          placeholder='Email adrress'
          value={formData.email}
          />
        </div>
        <br />
        <div className='password'>
          
          <input
          type="password"
          placeholder='Password'
          value={formData.password}
          name='password'
          onChange={handleChange}
          />
        </div>
        <br />
        <div className='forgot'>
          <h5>Forgot password</h5>
        </div>
        <br />
        <button className='loginbtn' type='submit' >Login</button>
      </form>
      
    </section>
    </div>
  )
}

export default Login
