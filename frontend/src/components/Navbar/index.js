import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { loginStatusContext } from "../../App";
import {FaSearch,FaShoppingCart} from "react-icons/fa"
import Search from "../SearchBar";
import { GoogleLogout,logout } from 'react-google-login';
const Navbar = () => {
  const { state,setState,path,setPath,setToken,setIsLoggedIn,setIsAdmin,subtotal,cartLength,setCounter} =
    useContext(loginStatusContext);
    const [isClicked,setIsClicked]=useState(false)
  const navigate = useNavigate();
   return (
     <div className="navComponent">
    <div className="navbar">
       <div className="logo">
      <Link to={"/"} onClick={()=>{setPath("") 
      setCounter(0)}} >
        <h1>MERAKI <span className="forcom">For COMPUTERS</span></h1>
      </Link>
      </div>
      <div className="searchBar">
        <Search/>
      <button> <FaSearch/></button>
      </div>
      <nav>
      <div className="links"
        style={
          localStorage.getItem("isLoggedIn") == "true" && localStorage.getItem("token") != "null" && localStorage.getItem("token") != "undefined"
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        {" "}
        <Link to={"/login"}>login</Link>
        <Link to={"/register"}>register</Link>
      </div>
      <div className="links">
      <Link to={"/adminpanel"} style={
          localStorage.getItem("isAdmin") == "true"
            ? { display: "flex" }
            : { display: "none" }
        }>admin&nbsp;panel</Link>
      <Link to={"/cart"}><FaShoppingCart size={25}/>&nbsp;&nbsp;{cartLength}&nbsp;|&nbsp;{subtotal}</Link>
      <Link
        to={"/"}
        style={
          localStorage.getItem("isLoggedIn") == "true"  && localStorage.getItem("token") != "null" && localStorage.getItem("token") != "undefined"
            ? { display: "flex" }
            : { display: "none" }
        }
        onClick={() => {
          setToken(null);
           setIsLoggedIn(false);
          setIsAdmin(false);
          
        }}
      >
        logout
      </Link>
      
      </div>
      </nav>
    </div>
    <div className="categories" >
      <Link className="cat" to={"/hardware"} onClick={()=>{
        setCounter(0)
        setPath("/category/hardware")

      }}>COMPUTER HARDWARE</Link>
      <Link className="cat" to={"/"}>PC&LAPTOPS</Link>
      <Link className="cat" to={"/"}>GAMING</Link>
      <Link className="cat" to={"/"}>PRINTERS&SCANNERS</Link>
      <Link className="cat" to={"/"}>SOFTWARE</Link>
    </div>
     
   
    </div>
  );
};
export default Navbar;
