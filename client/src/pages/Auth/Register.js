import React,{useState} from 'react'
import Mainbody from "../../components/Mainbody.js"
import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");

  const Navigation=useNavigate()

  //submit handler
  const handlersubmit=async (e)=>{
    e.preventDefault()
    try{

      const res=await axios.post('/api/v1/auth/register',{name,email,password,address,phone})
      if(res.data.success){
        toast.success(res.data.message)
        Navigation('/login');
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
    
    <div className='registrhead'><h3>Registeration
    </h3>
    </div>
    <div className="mb-3">
    <input type="name" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>  </div>
  <div className="mb-3">
    <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
  </div>
  <div className="mb-3">
    <input type="password" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" required />
  </div>
  <div className="mb-3">
    <input type="address" value={address} placeholder="Enter address" onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputaddress" required/>
  </div>
  <div className="mb-3">
    <input type="phone" value={phone} placeholder="Enter phone" onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPassword1" required/>
  </div>

  
  <button type="submit" className="btn-class">Submit</button>
</form>
</div>
    </Mainbody>
  )
}

export default Register