import React, { useState } from "react";
import axios from "axios";
const AddProduct=()=>{
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [imageUrl,setImageUrl]=useState("")
    const [price,SetPrice]=useState("")
    const [category,setCategory]=useState("")
    const [subcategory,setSubCategory]=useState("")
    const [manufacture,setManufacture]=useState("")
    const token=localStorage.getItem("token")
    const [message,setMessage]=useState("")
return(
    <div>
        <input type={"text"} placeholder={"title"} onChange={(e)=>{ setTitle(e.target.value)}}/>
        <input type={"text"} placeholder={"description"} onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type={"text"} placeholder={"imageUrl"} onChange={(e)=>{setImageUrl(e.target.value)}}/>
        <input type={"number"} placeholder={"price"} onChange={(e)=>{SetPrice(e.target.value)}}/>
        <input type={"text"} placeholder={"category"} onChange={(e)=>{setCategory(e.target.value)}}/>
        <input type={"text"} placeholder={"sub category"} onChange={(e)=>{setSubCategory(e.target.value)}}/>
        <input type={"text"} placeholder={"manufacture"} onChange={(e)=>{setManufacture(e.target.value)}}/>
        <button onClick={()=>{
            axios.post("http://localhost:5000/products/addproduct",{
                title:title,
                description:description,
                imageUrl:imageUrl,
                price:price,
                subcategory:subcategory,
                category:category,
                manufacture:manufacture,
            },{headers:{ Authorization:`Bearer ${token}`}}).then(()=>{setMessage("product added successfully")
        }).catch((err)=>setMessage(err.response.message))
            setTitle("")
            setDescription("")
            setImageUrl("")
            SetPrice("")
            setCategory("")
            setSubCategory("")
            setManufacture("")
        }}>Add product</button>
        {message}
    </div>
)
}
export default AddProduct