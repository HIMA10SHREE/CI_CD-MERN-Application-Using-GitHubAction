import React,{useState} from 'react'
import Mainbody from "../../components/Mainbody.js"
import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate,useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth.js';



const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [auth,setAuth]=useAuth()



  const Navigation=useNavigate()
  const location=useLocation()

  //submit handler
  const handlersubmit=async (e)=>{
    e.preventDefault()
    try{

      const res=await axios.post('/api/v1/auth/login',{email,password})
      if(res.data.success){
        toast.success(res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,

     });

     localStorage.setItem('auth',JSON.stringify(res.data));

        
        Navigation(location.state || "/");
      }
      else{
        toast.error(res.data.message)
      }
    }
    catch(error){
      console.log(error)
      toast.error("Something went wrong")
    }
  } 

  return (
    <Mainbody>
    <div className='form-main'>
    <form onSubmit={handlersubmit}>
    
    <div className='registrhead'><h3>Login
    </h3>
    </div>
   
  <div className="mb-3">
    <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
  </div>
  <div className="mb-3">
    <input type="password" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required />
  </div>
 

  
  <button type="submit" className="btn-class">Login</button>
</form>
</div>
    </Mainbody>
  
  )
}

export default Login