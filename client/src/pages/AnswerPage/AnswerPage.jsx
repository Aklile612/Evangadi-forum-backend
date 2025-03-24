import React, { useContext, useEffect, useState } from 'react'
import classes from "./Answer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faGreaterThan} from '@fortawesome/free-solid-svg-icons'
import axios from '../../axiosBase'

import { QuestionState } from '../../App'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const AnswerPage = () => {
    const {holdindex,setholdindex}=useContext(QuestionState);
    const [answers,setanswer]=useState([])
    async function getanswer() {
        try {
            if (!holdindex) return ;

            localStorage.setItem("holdindex",holdindex)
            const {data} = await axios.get(`/answers/single-answers/${holdindex}`,{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })    
            setanswer(data.result)
            console.log(data.result)
        } catch (error) {
            console.log(error)
        }
    }
    const [postanswer,setpostanswer]=useState({
        "answer":""
    })
    const handleChange=(event)=>{
        setpostanswer({
            ...postanswer,
            [event.target.name]:event.target.value
        })
    }
    const token=localStorage.getItem("token");
    async function handleSubmit(event){
        event.preventDefault();
        const answervalue=postanswer.answer
        if(!answervalue){
            alert("Provide all the data")
            return
        }
        try {
            const response= await axios.post(`/answers/all-answer/${holdindex}`,{
                answer:answervalue
            },
        {
            headers:{
                Authorization:'Bearer ' + token
            }
        })
        console.log(response)
        alert("submitted successfully")
        getanswer()
        setpostanswer({"answer":""})
        } catch (error) {
            console.log(error.response)
        }
    }
    // console.log(holdindex)
    
    useEffect(()=>{
        const storedindex=localStorage.getItem("holdindex")
        if(!holdindex && storedindex){
            setholdindex(storedindex)
        }
        if (holdindex){
            getanswer();
        }
    },[holdindex])
  return (
      <>
      <Header/>
      <div className={classes.head}>

        <h1 className={classes.answerheader}>Question</h1>
        {answers.length > 0 && (
            <div>
            <h3 className={classes.titlequestion1}>{answers[0].title}</h3>
            <div className={classes.descriptionquestion1}>{answers[0].description}</div>
        </div>
    )}
    </div>
        
        <hr  className={classes.head}/>
<h1 className={`${classes.answercommunity} ${classes.head}`}>Answer From the Communuity</h1>
        <hr className={classes.head}/>
    <ul>
        {answers?.map((answer,index)=>(
            <li className={classes.answerlist} key={index}>
                  
            {(answer.username && answer.username !== "null") && (
            <FontAwesomeIcon icon={faUser} className={classes.user}/>
            )}
            <div className={classes.singleusername}>
                    {answer.username}
               </div>
               <div className={classes.singleanswer}>
                    {answer.answer}
               </div>
            </li>
            ))}
    </ul>
    <div className={classes.answerpart}>

    <div className={classes.answerthetop}>
        <p>Answer the Top Question</p>
    </div>
    <Link to="/home" className={classes.gotoquestion}>Go To the Question Page</Link>

    <section>
        <form onSubmit={handleSubmit} >

        <div className={classes.answerquestion}>
        <input
        type="text"
        placeholder='Type your title'
        value={postanswer.answer}
        name='answer'
        onChange={handleChange}
        />
        </div>
         <button type='submit' className={classes.postbtn}> Post your Answer</button>
       </form>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default AnswerPage
