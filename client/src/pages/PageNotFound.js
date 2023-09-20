import React from 'react'
import Mainbody from '../components/Mainbody'
import {Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <Mainbody>
  <div className="buttn ">
  <h3 className="pnf-heading">Oops! Page Not Found!</h3>
  <Link to="/" className="btn btn-secondary center">Go to Home</Link>
  </div>
   
   </Mainbody>
   
  )
}

export default PageNotFound