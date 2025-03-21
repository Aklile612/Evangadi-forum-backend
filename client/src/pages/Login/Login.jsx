import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axiosBase'
import classes from'../Login/Login.module.css'
import { PageState } from '../../App'



const Login = () => {
  
  const {holdpage,setholdpage}=useContext(PageState);
  const [errmsg,seterrmsg]=useState("");
  const changestate = ()=>{
    if(holdpage==="false"){
      setholdpage("true")
    }else{
      setholdpage("false")
    }
  }
  const Navigator=useNavigate();
  const[formData,setformData]=useState({
    "email":"",
   "password":""
  })
  console.log(holdpage)
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
    seterrmsg("")
    // alert(" Loged IN-> Home page")
    Navigator("/home")
    localStorage.setItem("token",data.token)
    } catch (error) {
      if (error.response){
      seterrmsg(error.response.data.msg);
      console.log(error.response.data)
      // alert(error.response.data.msg)
    }
    }
    // console.log(formData)
    
  }
  
  return (
  

    <div className={classes.logincard}>
      
    <section>
      <div className={classes.error}>
      {errmsg?errmsg:""}
      </div>
      <h3 className={classes.text}> Login into your Account</h3>
      <h4 className={classes.text}>Don't have an account?<Link to="/" onClick={changestate} className={classes.textcolor}>Create a New account</Link> </h4>
      <form onSubmit={handleSubmit}>
        <div className={classes.email}>
         
          <input
          type="email"
          name='email'
          onChange={handleChange}
          placeholder='Email adrress'
          value={formData.email}
          />
        </div>
        <br />
        <div className={classes.password}>
          
          <input
          type="password"
          placeholder='Password'
          value={formData.password}
          name='password'
          onChange={handleChange}
          />
          
        </div>
        <br />
        <div className={classes.forgot}>
          <h5>Forgot password</h5>
        </div>
        <br />
        <button className={classes.loginbtn} type='submit' ><p>Login</p></button>
      </form>
      
    </section>
    </div>

  )
}

export default Login
