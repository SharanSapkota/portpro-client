
import React, { useEffect } from 'react'
import { Navigate } from 'react-router';
import { loginSuccess } from '../Services/authService';

export const Dashboard = () => {

    useEffect(() => {
        loginSuccess().then(response => {
            console.log(response)
            if(!response.ok)  <Navigate to="/login" replace />
          })
    })
     
    const handleLogoutClick = () => {
        window.open("http://localhost:4000/auth/logout", "_self");
        return <Navigate to={{ pathname: '/login' }} />;
      };
  
    return (
   <>
   <h1 className="dashboard">
       THIS IS DASHBOARD!
   </h1>
     <li onClick={handleLogoutClick}>Logout</li>

   </>
    )
};