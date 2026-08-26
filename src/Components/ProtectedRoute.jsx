import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const userdetails=localStorage.getItem('userinfo');
    if(!userdetails){
        return <Navigate to="/login"/>
    }
  return children
}

export default ProtectedRoute