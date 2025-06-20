import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import React from 'react'

const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute
