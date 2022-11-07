import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


export default function Updateuserprofile(){
  const [name, setname] = useState("");
  const [age, setage] = useState('');
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  
 
  const Updateuser = useMutation(
    ([name,password,age]) => {
      return axios.put('http://34.208.44.89:3006/user', {
            name: name,
            password:password,
            age: parseInt(age),
            
          })
    },   
  );
  function editprofileSubmit(e){
    e.preventDefault();
    Updateuser.mutate([name,password,age])
  }

    return(
      <body className="bodyStyle">
      <nav style={{ background: "orange" }}>
      <IoIosArrowDropleftCircle size={30} onClick={() => navigate('/dashboard')}/>    
      </nav>
      <div className="containerStyle">
        <div className="subcontainerStyle">
          <div className="orangedivStyle">
            <span className="textStyle fontStyle">Edit Profile</span>
            <label className="labelStyle">Username</label>
            <input
              className="form-control inputStyle"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            
            <label className="labelStyle">Age</label>
            <input
              className="form-control inputStyle"
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />

            <label className="labelStyle">Password</label>
            <input
              className="form-control inputStyle"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          
            <button
              type="submit"
              className="btn btn-primary labelStyle"
              style={{backgroundColor:"lightcoral"}}
              onClick={editprofileSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </div>
      
    </body>

    )
}