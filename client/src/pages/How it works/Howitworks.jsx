import React from 'react'
import classes from "./Howitworks.module.css"
import { Link } from 'react-router'
const Howitworks = () => {
  return (
    <>
    <div className={classes.howitwoks}>

      <div><Link to="/about"  className={classes.about}>About</Link></div> 
      <div classjustName={classes.header}>
      <h2>Evagadi Networks</h2>
      </div>
      <div className={classes.paragraph}>
      <p>
        No matter what stage of life you are in, whether you're just starting elementery <br />
        school or being propmted to CEO of fortune 500 company, you have much to <br />
        offer to those who are trying to follow in your footsteps. <br />
        <br />
        Whether you are willing to share your knowledge or you are just looking to meet <br />
        mentors of your own, please start by joining the network here.
        <br />

      </p>
      </div>
      
        <button className={classes.btn}><p>HOW IT WORKS</p></button>
      
    </div>
    </>
  )
}

export default Howitworks
