import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loginStatusContext } from "../../App";

const Cart = () => {

  
  const [state, setState] = useState(false);
  const { token,subtotal,setSubtotal,cart, setCart,cartLength, setCartLength } = useContext(loginStatusContext);
  const [cart2, setCart2] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setCart(result.data);
         
      })
      
  }, [state]);
  
  useEffect(()=>{
    if(cart)
    {const reduced=cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.total,
      0
      
    )
  setSubtotal(reduced)
  }
  },[cart])

  return (
    <div>
     
      {cart
        ? cart.map((element) => {
            return (
              
              <div key={element._id}>
                
                
                <img src={element.product.imageUrl} width={"50px"} />
                <p>{element.quantity}</p>
                <p>{element.total}</p>

                <button
                  onClick={() => {
                    setCartLength(cartLength-1)
                    axios
                      .delete(
                        `http://localhost:5000/users/cart/${element._id}`,

                        { headers: { Authorization: `Bearer ${token}` } }
                      )
                      .then((result) => {
                        setState(!state);         

                      })
                      .catch((err) => console.log(err.response.data));
                  }}
                >
                  remove
                </button>
                
              </div>
            );
          })
        : ""}
      <h1>Subtotal {subtotal}</h1>
    </div>
  );
};
export default Cart;
