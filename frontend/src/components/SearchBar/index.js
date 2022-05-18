import axios from "axios";
import React, { useEffect, useState } from "react";


const Search=()=>{
    const [array,setArray]=useState()
    const [state,setState]=useState()
    const[filter,setFilter]=useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/products/").then((result)=>{setArray(result.data)})
    },[state])
    return(
        <input className="searchInput" placeholder="search" onChange={(e)=>{
            const filtered = array.filter((element)=>{
                return element.title.includes(e.target.value.toUpperCase())
            })
            console.log(filtered)
        }} />

    )
}
export default Search