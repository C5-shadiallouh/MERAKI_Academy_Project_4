import React from "react";
import { Link } from "react-router-dom";
const AdminPanel=()=>{
    return(
        <div>
        <Link to={"/addproducts"}>Add products</Link>
        <Link to={"/allproducts"}>All products</Link>
        </div>
    )
}
export default AdminPanel