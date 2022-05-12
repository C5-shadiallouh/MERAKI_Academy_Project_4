import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
const Navbar =() => {
  return (
  <div>
    <Link to={"/"}><img src="http://simpleicon.com/wp-content/uploads/rocket.png" width={"80px"}/></Link>
      
      <input placeholder="search"/>
      <button> search</button>
      <Link to={"/login"}>login</Link>
      <Link to={"/register"}>register</Link>
      <Link to={"/cart"}>cart</Link>
  </div>);
}
export default Navbar;
