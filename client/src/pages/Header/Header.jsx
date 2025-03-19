import React from 'react'
import image from '../../assets/10001.png'
import { Link } from 'react-router'
import '../Header/Header.css'

const Header = () => {
  return (
    <>
    <div className='headers'>

    <div className='evanIcon'>
        <img src={image} alt="Evangadi icon" />
    </div>
    <div className='links'>
        <Link to = "/home" className='home'>Home</Link>
        <Link to="/howitworks" className='howitworks'>How it Works</Link>
        <Link to="/login" className='signIn'>SIGN IN</Link>
    </div>
    </div>
    </>
  )
}

export default Header
