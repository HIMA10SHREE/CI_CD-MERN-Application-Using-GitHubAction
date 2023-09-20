import React from 'react'
import Mainbody from '../components/Mainbody'
import img1 from "./coderspage.jpg"
import { useAuth } from '../context/auth'

const Homepage = () => {
 
  const[auth,setAuth]=useAuth()

  return (
    <Mainbody>
    <div className="image" >
    <div className='col-md-7'>
    <img src={img1} alt="" style={{ width:"100%"}}></img>
    </div>

    <div className='col-md-3'>
   <h2 className='text-center'>TALK IS CHEAP<br></br>
   SHOW ME THE CODE!
   </h2>
    </div>

    </div>

    
   
    </Mainbody>
  
  )
}

export default Homepage