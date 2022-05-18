import axios from "axios";
import { useContext, useEffect, useState } from "react";
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
const {token,cartLength,setCartLength,subtotal,setSubtotal}=useContext(loginStatusContext)
const [message,setMessage]=useState()
const [comment, setComment] = useState("");
const [commentArray, setCommentArray] = useState("");
const [state,setState]=useState(false)
const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
        axios.get(`http://localhost:5000/products/${elementId}`).then((result)=>{
            
            setTitle(result.data.title)
            setImageUrl(result.data.imageUrl)
            setPrice (result.data.price)
            setCommentArray (result.data.comments)
        })},[state])
    
    
    
    return(
        
       <div>
          
          <h1>{title}|</h1>
           <img src={imageUrl}/>
           <h1>{price?price:""}JOD</h1>
           <input defaultValue={1} type={"number"} placeholder={"Quantity"} onChange={(e)=>{
               setQuantity(e.target.value)
           }}/>
           
           <h1>{price?quantity*price:""}</h1>
           <button onClick={()=>{
             setCartLength(cartLength+1)
               axios.post("http://localhost:5000/users/cart",{
                product:elementId,
                quantity:quantity,
                total:quantity*price

                
            },{headers:{ Authorization:`Bearer ${token}`}}).then((result)=>{setMessage(result)
                setSubtotal(price?subtotal+quantity*price:"")
            setState(!state)}
            ).catch((err)=>setMessage(err.response.message))
           }}>add to cart</button>
<textarea
value={inputValue}
                    placeholder="put your comment"
                    onChange={(e) => {
                        setInputValue(e.target.value);
                      setComment(e.target.value);
                    }}
                  ></textarea>
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `http://localhost:5000/products/${elementId}/comments/`,
                          {
                            comment: comment,
                          },
                          {
                            headers: { Authorization: `Bearer ${token}` },
                          }
                        )
                        .then(() => {
                          setInputValue("")
                          setState(!state);
                        });
                    }}
                  >
                    Add comment
                  </button>
                  {commentArray?
                  commentArray.map((element)=>{
                      return(
                          <p key={element._id}>{element.commenter.firstName} {element.commenter.lastName} :{element.comment}</p>
                      )
                  })
                  
                  :""}

       </div>
    )
}

export default ProductPage