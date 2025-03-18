import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from '../axiosBase'
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
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email:--------</span>
          <input
          type="email"
          name='email'
          onChange={handleChange}
          placeholder='email'
          value={formData.email}
          />
        </div>
        <br />
        <div>
          <span>Password:---------</span>
          <input
          type="password"
          placeholder='password'
          value={formData.password}
          name='password'
          onChange={handleChange}
           />
        </div>
        <br />
        <button type='submit' >Login</button>
      </form>
    </section>
  )
}

export default Login
