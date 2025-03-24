import React from 'react'
import classes from "./Question.module.css"
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from '../../axiosBase'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const QuestionPage = () => {
    const [questions,setquestions]=useState({
        "title":"",
        "question":""
    })
    const handleChange=(event)=>{
        setquestions({
            ...questions,
            [event.target.name]:event.target.value

        })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const token=localStorage.getItem("token")
        const titlevalue=questions.title;
        const questionvalue=questions.question;
        if (!titlevalue || !questionvalue){
            alert("please enter all the things")
            return
        }
        try {
            const response=axios.post("/question/all-question",{
                title:titlevalue,
                description:questionvalue
            },
        {
            headers:{
                Authorization:"Bearer "+token
            },
        })
            console.log(response)
            alert("question submitted")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={classes.headerspace}>
    <Header/>
    <div className={classes.questionpage}>
        <h4 className={classes.stepstowrite}>Steps To write a good Question</h4>
        <ul >
            <li className={classes.questionlist}>
                <p>Summerize ur own problem in one-line title</p>
                <p>Describe your problem in more detail</p>
                <p>Describe what you tried and what you expected to happen</p>
                <p>Revire your question and post it to the site</p>
            </li>
        </ul> 
        <div className={classes.questioncard}>

        <h>Ask a public question </h>
        <Link to="/home" className={classes.gotohome}><p>Go to Question page</p></Link>
        <section>
            <form onSubmit={handleSubmit}>
            <div className={classes.title}>
                <input 
                type="text"
                placeholder='Type your title'
                value={questions.title}
                name='title'
                onChange={handleChange}
                />
             </div>
            <div className={classes.description}>
                <input
                 
                 type="text"
                 placeholder='Type your Question'
                 value={questions.question}
                 name='question'
                 onChange={handleChange}
                 />
            </div>
        <button type='submit' className={classes.postbtn}> Post your Question</button>
        </form>
        </section>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default QuestionPage
