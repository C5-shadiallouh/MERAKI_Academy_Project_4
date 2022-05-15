import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { loginStatusContext } from "../../App";
const Navbar = () => {
  const { token, setToken, isLoggedIn, setIsLoggedIn,isAdmin,setIsAdmin } =
    useContext(loginStatusContext);
  const navigate = useNavigate();
   return (
     <div className="navComponent">
    <div className="navbar">
       <div className="logo">
      <Link to={"/"}>
        <img
          src="http://simpleicon.com/wp-content/uploads/rocket.png"
          width={"80px"}
        />
      </Link>
      </div>
      <input placeholder="search" />
      <button> search</button>
      <nav>
      <div
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
      <Link to={"/adminpanel"} style={
          localStorage.getItem("isAdmin") == "true"
            ? { display: "flex" }
            : { display: "none" }
        }>admin panel</Link>
      <Link to={"/cart"}>cart</Link>
      <Link
        to={"/"}
        style={
          localStorage.getItem("isLoggedIn") == "true"
            ? { display: "flex" }
            : { display: "none" }
        }
        onClick={() => {
          localStorage.setItem("token", null);
          localStorage.setItem("isLoggedIn", false);
          localStorage.setItem("isAdmin", false);
          navigate("/");
        }}
      >
        logout
      </Link>
      </nav>
    </div>
    <div className="categories">
      <Link to={"/"}>COMPUTER HARDWARE</Link>
      <Link to={"/"}>PC&LAPTOPS</Link>
      <Link to={"/"}>GAMING</Link>
      <Link to={"/"}>PRINTERS&SCANNERS</Link>
      <Link to={"/"}>SOFTWARE</Link>
    </div>

    </div>
  );
};
export default Navbar;
