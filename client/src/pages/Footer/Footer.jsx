import React from 'react'
import image from '../../assets/10001.png'
import classes from '../Footer/Footer.module.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.images}>
            <img src={image} alt="evangadi icon" />
            <CiFacebook className={classes.icon}/>
            <FaInstagram className={classes.icon} />
            
            <FaYoutube className={classes.icon} />
        </div>
        <div className={classes.usefulink}>
            <p>Useful Link</p>
            <p>How it works</p>
            <p>Terms of service</p>
            <p>privacy Policy</p>
        </div>
        <div className={classes.Contactinfo}>
            <p>Evangadi Networks</p>
            <p>Support@evangadi.com</p>
            <p>+1-234-202-5678</p>
        </div>
      </div>
    </>
  )
}

export default Footer
