import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Home=()=>{
    
    const [products,setProducts]=useState()
    const [state,setState]=useState(false)
    const [counter,setCounter]=useState(0)
    useEffect(() => {
        axios
          .get(`http://localhost:5000/products?p=${counter}`)
          .then((result) => {
            
            setProducts(result.data);
           
          })
          .catch((error) => {
           
          });
      }, [state]);
    return(
        <div className="products">
            {products ? products.map((element,index)=>{
                return(
                    
                    <p key={element._id}   style={{display:"flex",flexDirection:"row"}} >{element.title}</p>
                    
                )
            }):""}
        <button onClick={()=>{
            setCounter(counter+1)
            setState(!state)
            console.log(counter);

        }}>click</button>
        </div>
    )
}
export default Home