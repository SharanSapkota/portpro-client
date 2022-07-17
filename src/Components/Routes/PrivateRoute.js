import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'
import { loginSuccess } from '../../Services/authService';

export const PrivateRoute = (props => {
  const [isAuthtenticated, setIsAuthenticated] = useState(false)
  const { children } = props;

  loginSuccess().then(response => {
    if(response.status === 200) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  })

  return isAuthtenticated ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
    />
  )
});