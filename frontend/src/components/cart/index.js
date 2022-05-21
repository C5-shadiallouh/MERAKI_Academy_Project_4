import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStatusContext } from "../../App";
import "./style.css"
const Cart = () => {
const navigate=useNavigate()
  
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
      {console.log(cart)}
      <table>
  <tr>
    <th>Image</th>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Remove Product</th>
    <th>Total</th>
    
  </tr>
  
      {cart
        ? cart.map((element) => {
            return (
              <tr>
    <td><img src={element.product.imageUrl} width={"200px"} /></td>
    <td>{element.product.title}</td>
    <td>{element.quantity}</td>
    <td> <button className="remove"
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
                </button></td>
    <td>{element.total}</td>
  </tr>
              
                
                
                
               

               
                
              
            );
          })
        : ""}
        </table>
        {subtotal?<div className="subtotal"><div><h1 >Subtotal:&nbsp;{subtotal}</h1><button onClick={()=>{navigate("/payment")}}>Check out</button></div></div>:<h1 className="empty">your cart is empty</h1>}
      
    </div>
  );
};
export default Cart;
{/* <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table> */}