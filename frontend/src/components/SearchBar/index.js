import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css"

const Search=()=>{
    const [array,setArray]=useState()
    const [state,setState]=useState()
    const[filter,setFilter]=useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/products/").then((result)=>{setArray(result.data)})
    },[state])
    return(
        <div className="searchInput">
            <div className="search">
        <input className="searchfield" placeholder="search" onChange={(e)=>{
            setFilter( array.filter((element)=>{
                if(e.target.value !=="")
                return element.title.includes(e.target.value.toUpperCase())
            }))
            
        }} />
      </div>
      <div className="filter">
        {filter?
        filter.map((element)=>{
            return(
                <div >
                <p>{element.title}</p>
                </div>
            )
        })
        :""}</div>
</div>
    )
}
export default Search