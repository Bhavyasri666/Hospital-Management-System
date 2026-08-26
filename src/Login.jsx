import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const[username,setUsername]=useState('');
    function handleSubmit(e){
       e.preventDefault();
       const user=localStorage.setItem('userinfo',username)
       alert("Form suBMITTED SUCCESSFULLY")
       navigate('/patients')
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Enter Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            <button>Submit</button>
        </form>
        <h1>{username}</h1>
    </div>
  )
}

export default Login