import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { loginStatusContext } from '../../App';
import"./style.css"
 const Login = () => {

  const [ emailOrPhone, setEmailOrPhone ] = useState("");
  const [password,setPassword]=useState("")
  const [message,setMessage]=useState("")
  const navigate=useNavigate()
  const {token,setToken,isLoggedIn,setIsLoggedIn,isAdmin,setIsAdmin} = useContext(loginStatusContext)
  const[state,setState]=useState(false)
    
  return (
    <div className='login'><h1>Login</h1>
      <h2 style={!message?{display:"none"}:{display:"flex"}}>{message}</h2>
    <input type={"text"} required={true} placeholder="Enter your email or phone number" onChange={(e)=>{
      setEmailOrPhone(e.target.value)
    }}/>
    <input type={"password"} required={true} placeholder="Enter password" onChange={(e)=>{
      setPassword(e.target.value)
    }}/>
    <div className='buttons'>
    <button onClick={()=>{
     axios.post("http://localhost:5000/users/login",{
      emailOrPhone: emailOrPhone,
      password:password
     }).then((result)=>{
       setToken(result.data.token)
       setIsAdmin(result.data.isAdmin)
       setIsLoggedIn(true)
       navigate("/")
     }).catch((err)=>{console.log(err.response.data);})
    }}>Login</button>
    <button onClick={()=>{navigate("/register")}}>Register&nbsp;Now!</button>
    </div>
    </div>
  )
}
export default Login