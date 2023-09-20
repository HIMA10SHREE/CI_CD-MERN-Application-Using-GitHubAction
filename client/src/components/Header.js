import React from 'react'
import {NavLink,Link} from "react-router-dom"
import { useAuth } from '../context/auth'
import {toast} from "react-hot-toast"


const Header = () => {

  const [auth,setAuth]=useAuth()

  const handlelogout =()=>{
    setAuth({
        ...auth,
        user:null,
        token:''
    })
    localStorage.removeItem('auth');
    toast.success("logout successfully")
   }


  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link to="/" className="navbar-brand" href="#">👨‍⚖️Online Judge</Link>      
         
      

  

       
        {
          !auth.user ? (<>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to="/register" className="nav-link" href="#">Sign Up</NavLink>
              </li>
      
               <li className="nav-item">
               <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
               </li>
               </ul>
              </>
              ) :(
                  <>

                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <NavLink to="/problemlist" className="nav1" aria-current="page" href="#"  >ProblemList</NavLink>
                  </li>
                  </ul>

                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                 
                    {auth?.user?.name}
  
                  </NavLink>
                 
                  <ul class="dropdown-menu ">
                   
                    <li className="nav-item">
                  <NavLink to="/login" onClick={handlelogout} className="nav-link" href="#">Logout</NavLink>
                  </li>
                  </ul>
              
                </li>
                </ul>
        
  
                  
                  
                  
                  </>)
  
         }
             
         
        
        
      </div>
    </div>
  </nav>
    

    </>
  )
}

export default Header