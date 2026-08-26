import React from 'react'
import { useNavigate } from 'react-router-dom'
function NotFound() {
  const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/')}>Home</button>
     <p> Redirect to Home page ....</p> 
     
      <img src="https://digitalipd.in/uploads/404.gif" width="60%" style={{marginLeft:"20%"}}/>
    </div>
  )
}

export default NotFound