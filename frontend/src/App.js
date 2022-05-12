import React,{useState,useContext, createContext} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Register from "./components/Register"
export const loginStatusContext = createContext();
function App() {
const [token,setToken]=useState(localStorage.getItem("token"))
const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("isLoggedIn"))
localStorage.setItem("token",token)
localStorage.setItem("isLoggedIn",isLoggedIn)
  return (
    <div className="App">
      <loginStatusContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn}}>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/"/>
      </Routes>
      </loginStatusContext.Provider>
    </div>
  );
}

export default App;
