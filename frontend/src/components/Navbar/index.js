import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { loginStatusContext } from "../../App";
const Navbar = () => {
  const { token, setToken, isLoggedIn, setIsLoggedIn,isAdmin,setIsAdmin } =
    useContext(loginStatusContext);
  const navigate = useNavigate();
   return (
    <div className="navbar">
      <Link to={"/"}>
        <img
          src="http://simpleicon.com/wp-content/uploads/rocket.png"
          width={"80px"}
        />
      </Link>

      <input placeholder="search" />
      <button> search</button>
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
    </div>
  );
};
export default Navbar;
