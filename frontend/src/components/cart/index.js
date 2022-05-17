import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loginStatusContext } from "../../App";

const Cart = () => {
  const [cart, setCart] = useState();
  const [state, setState] = useState(false);
  const { token } = useContext(loginStatusContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setCart(result.data);
      });
  }, [state]);
  return (
    <div>
      {cart
        ? cart.map((element) => {
            return (
              <div>
                <img src={element.product.imageUrl} width={"50px"} />
                <p>{element.quantity}</p>
                <p>{element.total}</p>
                <button
                  onClick={() => {
                    console.log(element._id)
                    axios
                      .delete(
                        `http://localhost:5000/users/cart/${element._id}`,
                        
                        { headers: { Authorization: `Bearer ${token}` } }
                      )
                      .then((result) => console.log(result.data))
                      .catch((err) => console.log(err.response.data));
                    setState(!state);
                  }}
                >
                  remove
                </button>
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default Cart;
