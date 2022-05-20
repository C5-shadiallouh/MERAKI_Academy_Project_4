import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { loginStatusContext } from "../../App";
import {FaSearch,FaShoppingCart} from "react-icons/fa"
import Search from "../SearchBar";
const Navbar = () => {
  const { state,setState,path,setPath,setToken,setIsLoggedIn,setIsAdmin,subtotal,cartLength} =
    useContext(loginStatusContext);
  const navigate = useNavigate();
   return (
     <div className="navComponent">
    <div className="navbar">
       <div className="logo">
      <Link to={"/"} >
        <img
          src="https://i.ibb.co/S0gVjdk/merakipc.png"
           
        />
      </Link>
      </div>
      <div className="searchBar">
        <Search/>
      <button> <FaSearch/></button>
      </div>
      <nav>
      <div className="links"
        style={
          localStorage.getItem("isLoggedIn") == "true"
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
      <Link to={"/cart"}><FaShoppingCart size={25}/>&nbsp;{cartLength}|{subtotal}</Link>
      <Link
        to={"/"}
        style={
          localStorage.getItem("isLoggedIn") == "true"
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
    <div className="categories">
      <Link to={"/hardware"} onClick={()=>{
        
        setPath("/category/hardware")

      }}>COMPUTER HARDWARE</Link>
      <Link to={"/"}>PC&LAPTOPS</Link>
      <Link to={"/"}>GAMING</Link>
      <Link to={"/"}>PRINTERS&SCANNERS</Link>
      <Link to={"/"}>SOFTWARE</Link>
    </div>
     
   
    </div>
  );
};
export default Navbar;
