import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loginStatusContext } from "../../App";

const Cart =()=>{
    const [cart,setCart]=useState()
    const {token}=useContext(loginStatusContext)
    useEffect(()=>{
        axios.get("http://localhost:5000/users/cart",{headers:{ Authorization:`Bearer ${token}`}}).then((result)=>{
            setCart(result.data)
        })
    },[])
    return(
        <div>
            {cart ? cart.map(element=>{
                return(
                    <div>
                        <img src={element.product.imageUrl} width={"50px"} />
                        <p>{element.quantity}</p>
                        <p>{element.total}</p>
                    </div>
                )
            })
            
            
            :""}
        </div>
    )
}
export default Cart