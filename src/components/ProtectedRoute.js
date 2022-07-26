import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const {token} = useSelector(state => state);

  if(token){
    return <Outlet />
  }
return <Navigate to={"/login"} />
}
