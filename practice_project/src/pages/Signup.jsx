import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import {signupcall} from '../apicalls.jsx';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/signupStyle.css";

export default function Signup() {
  const [name, setname] = useState("");
  const [age, setage] = useState('');
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setnameError] = useState("");
  const [ageError, setageError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const navigate = useNavigate();

  const signupMutate = useMutation(signupcall,{
    onSuccess:(data,variable)=>{console.log(variable,data);
    
      navigate('/')
    }, useErrorBoundary: true,
    suspense: true,
  });

  function handleValidation() {
    if (name === "") {
      setnameError("name is required");
    } else {
      setnameError("");
    }
    if (age === "") {
      setageError("age is required");
    } else {
      setageError("");
    }
    if (email === "") {
      setemailError("email is required");
    } else if (
      email !== "" &&
      !email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    ) {
      setemailError("please enter valid email");
    } else {
      setemailError("");
    }
    if (password === "") {
      setpasswordError("password is required");
    } else if (password !== "" && password.length < 6) {
      setpasswordError("password should be 6 characters long");
    } else {
      setpasswordError("");
    }

    if (
      name !== "" &&
      age !== "" &&
      email !== "" &&
      password !== "" &&
      nameError === "" &&
      ageError === "" &&
      emailError === "" &&
      passwordError === ""
    ) {
      alert("you have successfully created account");
      console.log({
        age: parseInt(age),
        name: name,
        email: email,
        password: password,
      });

      signupMutate.mutate([age,name,email,password])
      // axios
      //   .post("http://34.208.44.89:3006/auth/signup", {
      //     age: parseInt(age),
      //     name: name,
      //     email: email,
      //     password: password,
      //   })
      //   .then((res) => console.log(res.data))
      //   .catch((err) => console.log(err.message));
    }
  }

  function signupSubmit(e) {
    e.preventDefault();
    handleValidation();
  }

  return (
    <body className="bodyStyle">
      <div className="containerStyle">
        <div className="subcontainerStyle">
          <div className="orangedivStyle">
            <span className="textStyle fontStyle">Create Account </span>
            <label className="labelStyle">Username</label>
            <input
              className="form-control inputStyle"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <span className="text-danger">{nameError}</span>

            <label className="labelStyle">Email address</label>
            <input
              className="form-control inputStyle"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-danger">{emailError}</span>

            <label className="labelStyle">Age</label>
            <input
              className="form-control inputStyle"
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            <span className="text-danger">{ageError}</span>

            <label className="labelStyle">Password</label>
            <input
              className="form-control inputStyle"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-danger">{passwordError}</span>
            <button
              type="submit"
              className="btn btn-primary labelStyle"
              style={{backgroundColor:"lightcoral"}}
              onClick={signupSubmit}
            >
              Signup
            </button>

            <span className="textStyle labelStyle">
              Already user? <NavLink to="/" style={{color:"coral"}}>Signin</NavLink>
            </span>
          </div>
        </div>
      </div>
    </body>
  );
}
