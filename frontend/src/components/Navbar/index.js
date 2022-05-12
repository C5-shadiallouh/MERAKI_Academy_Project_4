import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { loginStatusContext } from "../../App";
const Navbar =() => {
  const{isLoggedIn} = useContext(loginStatusContext)
  return (
  <div className="navbar">
    <Link to={"/"}><img src="http://simpleicon.com/wp-content/uploads/rocket.png" width={"80px"}/></Link>
      
      <input placeholder="search"/>
      <button> search</button>
      <div style={isLoggedIn ? {display:"none"}:""}>      <Link to={"/login"}>login</Link>
      <Link to={"/register"}>register</Link>
      </div>

      <Link to={"/cart"}>cart</Link>
  </div>);
}
export default Navbar;
