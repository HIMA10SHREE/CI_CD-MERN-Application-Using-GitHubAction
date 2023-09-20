import Mainbody from '../components/Mainbody'
import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"


export const SinglePage = () => {
  //  const {p_id}=useParams()
    const {p_id}=useParams()
    const[prob,setProb]=useState([])
    const[code,setCode]=useState('')
    const [output,setOutput]=useState('')
    const [language,setLanguage]=useState("cpp")


    useEffect(() => {
      // Simulating an API call to fetch details based on the ID
      const fetchDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/v1/Problem/get-problem/${p_id}`); // Replace with your API endpoint
          const data = await response.json();
          setProb(data.problem);
          console.log(data.problem);
          
        } catch (error) {
          console.error('Error fetching details:', error);
        }
      };
  
      fetchDetails();
    }, [p_id]);
      

    const handleSubmit=async()=>{
      const payload={
        language,
        code
      };

      try{
      const {data}=await axios.post("http://localhost:8000/run",payload)
      // setOutput(data.output);
      console.log(data);
      setOutput(data.jobId)


      let intervalId=setInterval(async()=>{
      const {data:datares}=await axios.get("http://localhost:8000/status",{params:{id:data.jobId}})
      console.log(datares)
      const{success,job,error}=datares;
      if(success){
        const {status: jobStatus, output:jobOutput}=job;
        if(jobStatus==="pending") return;
        setOutput(jobOutput)
        clearInterval(intervalId);
      }
      else{
        console.error(error)
        clearInterval(intervalId)
        setOutput(error)
      }
      
      console.log(datares)
      // setOutput(datares.output)
     },1000);
    }
    catch({response}){
      if(response){
        const errmsg=response.data.err.stderr;
        setOutput(errmsg)
      }
      else{
        setOutput("Error in connecting server")
      }
    }
  }

    return(
      <Mainbody>
    <div class="container">
    <div class="row align-items-start">
    <div class="col">
         <div className='title'><h4>{prob.p_name}</h4> </div>
         <div className='description'> {prob.p_description}</div>
          <div className='difficulty'> Difficulty: {prob.difficulty_level}</div>
        
    </div>
    <div class="col">
    <h3>Code Here</h3>
    <div className="select">
    <label>Language:  </label>
    <select
      value={language}
      onChange={(e)=>{
        setLanguage(e.target.value);
        console.log(e.target.value);
      }}>
    <option value="cpp">C++</option>
    <option value="py">Python</option>
   
    </select>
    </div>
    
    <textarea rows="16" cols="60" value={code} onChange={(e)=>{setCode(e.target.value)}}></textarea>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    <p>{output} </p>
    </div>
   
   </div>
    </div>
      
     
      </Mainbody>
    )
    
}

