import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from '../axiosBase'
const Register = () => {
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
    <section>
        <form onSubmit={handleSubmit}>
            <div>
                <span>Username:------</span>
                <input type="text" 
                placeholder='username'
                value={formData.username}
                name='username'
                onChange={handleChange}
                />
            </div>
            <br/>
            <div>
                <span>Firstname:------</span>
                <input type="text" placeholder='first name'
                value={formData.firstname}
                name='firstname'
                onChange={handleChange}
                />
            </div>
            <br/>
            <div>
                <span>Lastname:------</span>
                <input type="text" placeholder='lastname'
                value={formData.lastname}
                name='lastname'
                onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <span>Email:------</span>
                <input type="email" placeholder='email'
                value={formData.email}
                name='email'
                onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <span>Password:------</span>
                <input type="password" placeholder='password'
                value={formData.password}
                name='password'
                onChange={handleChange}
                />
            </div>
            <br />
            <button type='submit'>Register</button>
            
        </form>
    </section>
  )
}

export default Register
