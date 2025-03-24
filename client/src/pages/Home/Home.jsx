  import React, { useContext, useEffect, useState } from 'react'
  import Header from '../Header/Header'
  import Footer from '../Footer/Footer'
  import classes from './Home.module.css'
  import { AppState, QuestionState } from '../../App'
  import axios from '../../axiosBase'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faUser,faGreaterThan} from '@fortawesome/free-solid-svg-icons'
  import { Link, useNavigate } from 'react-router-dom'

  const Home = () => {
    const navigate=useNavigate()
    const {holdindex,setholdindex}=useContext(QuestionState)
      const {user}=useContext(AppState)
      const [userquestion,setuserquestion]=useState([])
      async function getallquestion() {
              try {
                const token=localStorage.getItem("token")
                const {data}= await axios.get("/question/get-question",{
                  headers:{
                    Authorization: 'Bearer '+ token
                  }
                })
                // console.log(data.result[0].questionid)
                setuserquestion(data.result)
                // alert("questions found")
              } catch (error) {
                console.log(error.response.data)
              }      
      }
      const getkey=(keys)=>{
        setholdindex(keys)
        navigate(`/answerpage/${keys}`)
      }
      useEffect(()=>{
        getallquestion()
      },[])
      console.log(holdindex)
      return (
        <>
      <Header/>
      <div className={classes.home}>
          <div className={classes.head}>
                <Link to="/askquestion" className={classes.askbtn}>
              <button className={classes.askquestion}>
                Ask Question
                </button>
                </Link>
              <h6>welcome: {user.username}</h6>
          <h3>Questions</h3>
          <hr style={{marginLeft:"185px",border:"1px solid grey",marginRight:"185px"}}/>
          <div className={classes.questions}>
            <ul>
              {userquestion.map((q,index) =>(
                <li className={classes.singlequestion} key={index}>
                  {/* <div className={classes.forview}></div> */}
                  <FontAwesomeIcon icon={faUser} className={classes.user}/>  
                  <div className={classes.questionandbutton}>
                    <div className={classes.description}>{q.title}</div>
                   <button className={classes.next} onClick={()=>{getkey(q.questionid)}}>
                  <Link>  <FontAwesomeIcon icon={faGreaterThan}  /></Link>
                    </button> 
                  </div>
                  <div className={classes.username} >{q.username}</div>
                  <hr style={{marginLeft:"0px",border:"1px solid grey",marginRight:"0px",width:"965px",marginTop:"-6px",display:"block"}} />
                </li>
              ))}
            </ul>
            </div>
          </div>
      </div>
      <Footer/> 
      </>
    )
  }

  export default Home
