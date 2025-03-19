import React from 'react'
import image from '../../assets/10001.png'
import { Link } from 'react-router'
import classes from "./Header.module.css"

const Header = () => {
  return (
    <>
    <div className={classes.headers}>

    <div className={classes.evanIcon}>
        <img src={image} alt="Evangadi icon" />
    </div>
    <div className={classes.links}>
        <Link to = "/home" className={classes.home}>Home</Link>
        <Link to="/howitworks" className={classes.howitworks}>How it Works</Link>
        <Link to="/login" className={classes.signIn}>SIGN IN</Link>
    </div>
    </div>
    </>
  )
}

export default Header
