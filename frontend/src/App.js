import React, { useState, useContext, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import AdminPanel from "./components/Adminpanel";
import AddProduct from "./components/Adminpanel/Addproduct";
import AllProducts from "./components/Adminpanel/Allproducts";
import Hardware from "./components/Categories/ComputerHardware";
import ProductPage from "./components/ProductPage";
import Cart from "./components/cart";
import PaymentForm from "./components/Payments";
import Charts from "./components/Adminpanel/Charts";
export const loginStatusContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  localStorage.setItem("token", token);
  localStorage.setItem("isLoggedIn", isLoggedIn);
  localStorage.setItem("isAdmin", isAdmin);
  const [products, setProducts] = useState();
  const [path, setPath] = useState("");
  const [state, setState] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [cart, setCart] = useState();
  const [cartLength, setCartLength] = useState(0);
  const [rating, setRating] = useState(0); // initial rating value
  const [rateArray, setRateArray] = useState("");
  const [counter, setCounter] = useState(0);
 
  return (
    <div className="App">
      <loginStatusContext.Provider
        value={{
          token,
          setToken,
          isLoggedIn,
          setIsLoggedIn,
          isAdmin,
          setIsAdmin,
          products,
          setProducts,
          path,
          setPath,
          state,
          setState,
          subtotal,
          setSubtotal,
          cart,
          setCart,
          cartLength,
          setCartLength,counter, setCounter
          
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/charts" element={<Charts/>} />
          <Route path="/" element={<Home />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/products/:category" element={<Hardware />} />
          <Route path="/:elementId" element={<ProductPage />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="hardware/:elementId" element={<ProductPage />} />
          <Route path="/pclaptop" element={<Hardware />} />
          <Route path="pclaptop/:elementId" element={<ProductPage />} />
          <Route path="/gaming" element={<Hardware />} />
          <Route path="gaming/:elementId" element={<ProductPage />} />
          <Route path="/printerscanner" element={<Hardware />} />
          <Route path="printerscanner/:elementId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </loginStatusContext.Provider>
    </div>
  );
}

export default App;
