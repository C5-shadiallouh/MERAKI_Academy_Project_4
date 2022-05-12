import React,{useState,useContext, createContext} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Register from "./components/Register"
import Home from "./components/Home";
import AdminPanel from "./components/Adminpanel";
import AddProduct from "./components/Addproduct";
export const loginStatusContext = createContext();
function App() {
const [token,setToken]=useState(localStorage.getItem("token"))
const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("isLoggedIn"))
const [isAdmin,setIsAdmin]=useState(localStorage.getItem("isAdmin"))
localStorage.setItem("token",token)
localStorage.setItem("isLoggedIn",isLoggedIn)
localStorage.setItem("isAdmin",isAdmin)
  return (
    <div className="App">
      <loginStatusContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,isAdmin,setIsAdmin}}>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/adminpanel" element={<AdminPanel/>}/>
      <Route path="/addproducts" element={<AddProduct/>}/>
      </Routes>
      </loginStatusContext.Provider>
    </div>
  );
}

export default App;
