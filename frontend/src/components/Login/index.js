import React,{useState} from 'react'
 const Login = () => {
  const [ emailOrPhone, setEmailOrPhone ] = useState("");
  const [password,setPassword]=useState("")
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
        
      })
    }}>Login</button>
    
    </div>
  )
}
export default Login