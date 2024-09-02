import React from 'react'
import { Navigate } from "react-router-dom";

const protectedRoute = ({ children, user }) => {
  return  user ? children : <Navigate to="/" />
}

export default protectedRoute
