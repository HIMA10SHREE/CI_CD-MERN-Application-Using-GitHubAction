import Mainbody from '../components/Mainbody'
import React,{useEffect, useState} from 'react'
import axios from "axios"
import { toast } from 'react-hot-toast'
import {NavLink,Link} from "react-router-dom"

const ProblemList = () => {

  const [problem,setProblem]=useState([])
  const url="http://localhost:8000/api/v1/Problem/get-problem";
  const getAllProblem=async()=>{
      try{
        const res= await axios.get(`${url}`)
        const data=res.data.problem
         console.log(data)
          //  if(data?.success){
              setProblem(data);
          
        // }
  
      }
      catch(error){
        console.log(error)
        toast.error("Something went wrong")
      }
    }
  
  
    useEffect(()=>{
      getAllProblem();
    },[]); 

  return (
    <Mainbody>

    <div className="problemspace">
    <h1>Problem List</h1>
    <div className='prob1'></div>
    {problem && problem.map(item => (
      <div className='prob2'>
      {item.p_id}) 
      <NavLink to={`singleproblem/${item.p_id}`} className="prob12" aria-current="page" href="#"> {item. p_name}<br></br></NavLink> 
      </div>))}
      </div>
   
    </Mainbody>
   
  )
}

export default ProblemList
