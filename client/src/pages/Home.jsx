import React, { useContext } from 'react'
import { AppState } from '../App'




const Home = () => {
  const {user}=useContext(AppState)
  console.log(user)
  return (
    <>
      <div>
        Home
      </div>
      <br />
      <br />
      <br />
      <h1>{user.username}</h1>
    </>
  )
}



export default Home
