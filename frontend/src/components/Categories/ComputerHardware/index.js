import axios from "axios";
import React,{useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { loginStatusContext } from "../../../App";
import Home from "../../Home";
const Hardware= ()=>{
const {setPath,state,setState,setProducts,path}=useContext(loginStatusContext)

    return(
        <div>
        <div className="subCat"> 
        <p>cpu</p>
        <p onClick={()=>{
            setPath("/category/hardware/gpu")
            setState(!state)
        }}>Graphic cards</p>
        
        </div>
        <div className="products">
           
    <Home/>
        </div>
        </div>
    )
}

export default Hardware