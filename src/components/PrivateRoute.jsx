// src/components/PrivateRoute.jsx

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // ✅ Remove curly braces

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext); // ✅ Correct way
  
  console.log("AUTH CONTEXT VALUE", auth);
  let data=  localStorage.getItem("auth");
  console.log("AUTH CONTEXT VALUE", auth);
  console.log("AUTH data CONTEXT VALUE", data);

  return auth?.message  ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
