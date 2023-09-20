import React from 'react';
import Header from "./Header.js"
import { Toaster } from 'react-hot-toast';

const Mainbody = ({children}) => {
  return (
    <div>
    <Header/>
    <main >
    <Toaster/>
    {children}
    </main>
   
    </div>
  
  )
}

export default Mainbody