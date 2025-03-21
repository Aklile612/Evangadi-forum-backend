import React, { useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './Home.module.css'
import { AppState } from '../../App'

const Home = () => {
    const {user}=useContext(AppState)
  return (
    <>
     <Header/>
     <div className={classes.home}>
        <div className={classes.head}>
            <button className={classes.askquestion}> Ask Question</button>
            <h6>welcome: {user.username}</h6>
        <h3>Questions</h3>
        <hr />
        </div>
     </div>
     <Footer/> 
    </>
  )
}

export default Home
