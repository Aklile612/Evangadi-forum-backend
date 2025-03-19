import React from 'react'
import image from '../../assets/10001.png'
import '../Footer/Footer.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='images'>
            <img src={image} alt="evangadi icon" />
            <CiFacebook className='icon'/>
            <FaInstagram className='icon' />
            
            <FaYoutube className='icon' />
        </div>
        <div className='usefulink'>
            <p>Useful Link</p>
            <p>How it works</p>
            <p>Terms of service</p>
            <p>privacy Policy</p>
        </div>
        <div className='Contactinfo'>
            <p>Evangadi Networks</p>
            <p>Support@evangadi.com</p>
            <p>+1-234-202-5678</p>
        </div>
      </div>
    </>
  )
}

export default Footer
