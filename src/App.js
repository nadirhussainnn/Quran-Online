import React from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from "./pages/Register"
//theme
import app_logo from "./assets/icons/app_logo.png"
import './pages/styles.scss'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/Dashboard'


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={
        <>
          <Nav />
          <Login />
        </>
      } />
      <Route path="/register" element={
        <>
          <Nav />
          <Register />
        </>
      } />
      <Route path="/dashboard" element={
        <>
          <Nav />
          <Dashboard />
        </>
      } />
    </Routes>
  )
}

const Nav = () => {
  let navigate=useNavigate()

  return (
    <div className="container">
      <div className="logo">
        <img src={app_logo} className="logo-png" alt="logo" onClick={()=>navigate("/")}/>
      </div>
    </div>
  )
}