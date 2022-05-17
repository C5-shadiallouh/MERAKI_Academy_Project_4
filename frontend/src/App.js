import React,{useState,useContext, createContext} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Register from "./components/Register"
import Home from "./components/Home";
import AdminPanel from "./components/Adminpanel";
import AddProduct from "./components/Addproduct";
import Hardware from "./components/Categories/ComputerHardware"
import ProductPage from "./components/ProductPage";
import Cart from "./components/cart";
export const loginStatusContext = createContext();
function App() {
const [token,setToken]=useState(localStorage.getItem("token"))
const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("isLoggedIn"))
const [isAdmin,setIsAdmin]=useState(localStorage.getItem("isAdmin"))
localStorage.setItem("token",token)
localStorage.setItem("isLoggedIn",isLoggedIn)
localStorage.setItem("isAdmin",isAdmin)
const [products, setProducts] = useState();
const [path, setPath] = useState("");
const [state, setState] = useState(false);
  return (
    <div className="App">
      <loginStatusContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,isAdmin,setIsAdmin,products,setProducts,path, setPath,state, setState}}>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/adminpanel" element={<AdminPanel/>}/>
      <Route path="/addproducts" element={<AddProduct/>}/>
      <Route path="/hardware" element={<Hardware/>}/>
      <Route path="/products/:category" element={<Hardware/>}/>
      <Route path="/:elementId" element={<ProductPage/>}/>
      <Route path="hardware/:elementId" element={<ProductPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </loginStatusContext.Provider>
    </div>
  );
}

export default App;
