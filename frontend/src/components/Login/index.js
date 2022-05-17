import React,{useContext, useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { loginStatusContext } from '../../App';
 const Login = () => {

  const [ emailOrPhone, setEmailOrPhone ] = useState("");
  const [password,setPassword]=useState("")
  const [message,setMessage]=useState("")
  const navigate=useNavigate()
  const {token,setToken,isLoggedIn,setIsLoggedIn,isAdmin,setIsAdmin} = useContext(loginStatusContext)
  return (
    <div>Login
      
    <input type={"text"} placeholder="Enter your email or phone number" onChange={(e)=>{
      setEmailOrPhone(e.target.value)
    }}/>
    <input type={"text"} placeholder="Enter password" onChange={(e)=>{
      setPassword(e.target.value)
    }}/>
    <button onClick={()=>{
      axios.post("http://localhost:5000/users/login",{
        emailOrPhone:emailOrPhone,
        password:password
      }).then((result)=>{
        setToken(result.data.token)
        setIsLoggedIn(true)
        setIsAdmin(result.data.isAdmin)
navigate("/")
      })
      .catch((err)=>{
        setMessage(err.response.data)
      })
    }}>Login</button>
    {message}
    </div>
  )
}
export default Login