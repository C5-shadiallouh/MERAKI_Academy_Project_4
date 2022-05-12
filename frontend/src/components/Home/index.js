import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Home=()=>{
    const [products,setProducts]=useState()
    const [state,setState]=useState(false)
    useEffect(() => {
        axios
          .get(" http://localhost:5000/products/")
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
                    
                    <img key={element._id} src= {element.imageUrl} style={{display:"flex",flexDirection:"row"}} />
                    
                )
            }):""}
        </div>
    )
}
export default Home