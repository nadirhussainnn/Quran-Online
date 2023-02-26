/**
 * @author Nadir
 * @version 1.0
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiPOST } from "../apiService/apiService";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

//theme
import './styles.scss'


export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = () => {

    if (!email || !password) {
      toast.error("Email and password required!")
    }

    apiPOST("login", {
      email,
      password
    }).then(resp => {

      if (resp.success) {
        localStorage.setItem("user", JSON.stringify(resp.data.user))
        localStorage.setItem("token", resp.data.token)
        navigate("/dashboard")
      }
      else {
        toast.error(resp.message)
      }
    }).catch(error => {
      toast.error("Server error: Try again later")
    })

  }


  return (

    <div className="login-register-container">
      <div className="right-part">
        <p className="sign-in-text">Sign in to </p>
        <p className="sign-in-sub-text">The Quran Online </p>
        <p className="register-text-2">Don't have account yet? <span className="register-sub-text"><Link to="/register">Register Now</Link></span> </p>
      </div>
      <div className="left-part">
        <p className="sign-in-sub-text">Sign in</p>
        <div className="form-container">
          <div className="field-container">
            <input type={"text"} placeholder="Enter email or user name" className="input" maxLength={30} value={email} onChange={handleEmailChange} />
          </div>
          <div className="field-container">
            <input type={"password"} placeholder="Password" className="input" maxLength={30} value={password} onChange={handlePasswordChange} />
          </div>

          <div className="forgot-text-container">
            <Link to="/" className="forgot-text-container">Forgor password ?</Link>
          </div>

          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>

  )
}
