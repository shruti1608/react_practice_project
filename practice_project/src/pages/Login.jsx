import React, { useState,useContext } from "react";
import "../styles/loginStyle.css";
import { NavLink,useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {  sigincall } from "../apicalls";
import { Usercontext } from "../components/Usercontext";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const navigate = useNavigate();
  const [user,setuser] = useContext(Usercontext);

  const siginMutation = useMutation(sigincall,{
  
    onSuccess:(data,variable)=>{console.log(variable,data);
      setuser(variable);
      console.log("in login",user);
      navigate('/dashboard')
    }, useErrorBoundary: true,
    suspense: true,
    
  })

  const handleValidation = (event) => {
    if (email === "") {
      setemailError("email is required");
    } else if (
      email !== "" &&
      !email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    ) {
      setemailError("please enter correct emaiil");
    } else {
      setemailError("");
    }
    if (password === "") {
      setpasswordError("password is required");
    } else if (password !== "" && password.length < 6) {
      setpasswordError("password should be 6 charactors long");
    } else {
      setpasswordError("");
    }

    if(email !== '' && password !== '' && emailError === '' && passwordError === ''){
      //alert('you have successfully login')
      console.log({"username":email,"password":password})
   
      siginMutation.mutate([email,password])
     
      // axios.post('http://34.208.44.89:3006/auth/login',
      // {username: email,
      // password: password,}).then(res => console.log(res.data,res.status))
   
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <body className="bodyStyle">
      <div className="containerStyle">
        <div className="subcontainerStyle">
          <div className="orangedivStyle">
            <span className="textStyle fontStyle">My Account</span>

            <div className="form-group">
              <label className="labelStyle">Email address</label>
              <input
                type="email"
                className="form-control inputStyle"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="text-danger">{emailError}</span>
            </div>

            <div className="form-group">
              <label className="labelStyle">Password</label>
              <input
                type="password"
                className="form-control inputStyle"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="text-danger"> {passwordError}</span>
            </div>

            <NavLink to="/changepassword" style={{color:"coral"}}>forgot password?</NavLink>

              <button
                className="btn btn-primary textStyle labelStyle"
                style={{backgroundColor:"coral"}}
                type="submit"
                onClick={loginSubmit}
              >
                Signin
              </button>
            
            <span className="textStyle labelStyle">
              new user? <NavLink to="/signup" style={{color:"coral"}}>signup</NavLink>
            </span>
          </div>
        </div>
      </div>
    </body>
  );
}
