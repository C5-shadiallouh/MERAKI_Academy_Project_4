import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { loginStatusContext } from "../../../App";


const AllProducts=()=>{
    const [products,setProducts]=useState()
    const[state,setState]=useState(false)
    const {token}=useContext(loginStatusContext)
    useEffect(()=>{
        axios.get("http://localhost:5000/products").then(result=>setProducts(result.data))
    },[state])
    
    return(
        <div>
            {products?
            products.map((element,index)=>{
                return(
                    <div>
                        <img src={element.imageUrl} />
                        <p>{element.title}</p>
                        <p>{element.description}</p>
                        <button onClick={()=>{
                           axios
                           .delete(`http://localhost:5000/products/delete/${element._id}`, {
                             headers: { Authorization: `Bearer ${token}` },
                           })
                           .then((result) => {
                              setState(!state)
                           })
                           
                        
                        }}>delete</button>
                    </div>
                    
                )
            })
            :""}
        </div>
    )
}
export default AllProducts