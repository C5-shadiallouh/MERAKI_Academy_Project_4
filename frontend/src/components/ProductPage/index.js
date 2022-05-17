import axios from "axios";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { loginStatusContext } from "../../App";

const ProductPage=()=>{
    let {elementId} = useParams()
    const [title,setTitle] = useState()
const [description,setDescription]=useState()
const [imageUrl,setImageUrl]=useState()
const [price,setPrice]=useState()
const [quantity,setQuantity]=useState(1)
const [total,setTotal]=useState()
const {token}=useContext(loginStatusContext)
const [message,setMessage]=useState()

   const info = (id)=>{
        axios.get(`http://localhost:5000/products/${id}`).then((result)=>{
            
            setTitle(result.data.title)
            setImageUrl(result.data.imageUrl)
            setPrice (result.data.price)
        })}
    
    
    
    return(
        
       <div>
           {info(elementId)}
          <h1>{title}|</h1>
           <img src={imageUrl}/>
           <h1>{price}JOD</h1>
           <input defaultValue={1} type={"number"} placeholder={"Quantity"} onChange={(e)=>{
               setQuantity(e.target.value)
           }}/>
           
           <h1>{quantity*price}</h1>
           <button onClick={()=>{
             
               axios.post("http://localhost:5000/users/cart",{
                product:elementId,
                quantity:quantity,
                total:quantity*price

                
            },{headers:{ Authorization:`Bearer ${token}`}}).then((result)=>setMessage(result)).catch((err)=>setMessage(err.response.message))
           }}>add to cart</button>
{               console.log(quantity)}  
       
       </div>
    )
}

export default ProductPage