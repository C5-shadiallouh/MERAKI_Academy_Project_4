import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";


const ProductPage=()=>{
    let {elementId} = useParams()
    const [title,setTitle] = useState()
const [description,setDescription]=useState()
const [imageUrl,setImageUrl]=useState()

   
        axios.get(`http://localhost:5000/products/${elementId}`).then((result)=>{
            
            setTitle(result.data.title)
            setImageUrl(result.data.imageUrl)
           
        })
    
    
    
    return(
        
       <div>
          <h1>{title}|</h1>
           <img src={imageUrl}/>
       </div>
    )
}

export default ProductPage