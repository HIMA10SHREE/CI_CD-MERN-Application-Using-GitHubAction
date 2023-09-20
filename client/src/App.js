import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage.js";
import ProblemList from "./pages/ProblemList";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import {ToastContainer,toast} from "react-hot-toast"
import { SinglePage } from "./pages/SinglePage.js";

function App() {
    return (
    <>
  <Routes>
  
  <Route  path="/" element={<Homepage/>}/>
  <Route  path="/problemlist" element={<ProblemList/>}/>
  <Route  path="/register" element={<Register/>}/>
  <Route  path="/login" element={<Login/>}/>
  <Route path="/problemlist/singleproblem/:p_id" element={<SinglePage/>}/>
  <Route  path="*" element={<PageNotFound/>}/>
  </Routes>
    
   
    </>
    );
  }
  
  export default App;
  