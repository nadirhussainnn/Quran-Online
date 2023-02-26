/**
 * @author Nadir
 * @version 1.0
 */

import React, {useState} from "react";
import { Link } from "react-router-dom";
import { apiPOST } from "../apiService/apiService";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

//theme
import './styles.scss'


export default function Register() {

  const[email, setEmail]=useState("")
  const[fullname, setName]=useState("")
  const[password, setPassword]=useState("")

  const navigate=useNavigate()
  const handleNameChange=(e)=>{
    setName(e.target.value)
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value)
  }
  const handleSignUp=()=>{
    
    if(!email || !password || !fullname){
      toast.error("All fields required required!") 
    }

    apiPOST("register",{
      fullname,
      email,
      password
    }).then(resp=>{

      if(resp.success){
        navigate("/")
        toast.success(resp.message)
        
      }
      else{
        toast.error(resp.message) 
      }
    }).catch(error=>{
      toast.error(error.message) 
    })

  }


  return (
    <div className="login-register-container">
        <div className="right-part">
          <p className="sign-in-text">Sign up to </p>
          <p className="sign-in-sub-text">The Quran Online </p>
          <p className="register-text-2">Already have account? <span className="register-sub-text"><Link to="/">Login Now</Link></span> </p>
        </div>
        <div className="left-part">
          <p className="sign-in-sub-text">Sign Up</p>
          <div className="form-container">

            <div className="field-container">
              <input type={"text"} placeholder="Full Name" className="input" maxLength={30} value={fullname} onChange={handleNameChange}/>
            </div>

            <div className="field-container">
              <input type={"email"} placeholder="Enter email or user name" autoComplete="true" className="input" maxLength={30} value={email} onChange={handleEmailChange}/>
            </div>
            <div className="field-container">
              <input type={"password"} placeholder="Password" className="input" maxLength={30} value={password} onChange={handlePasswordChange}/>
            </div>

            <button className="btn" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
  )
}
