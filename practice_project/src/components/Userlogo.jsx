import Gravatar from "react-gravatar";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getusercall } from "../apicalls";
import { useContext } from "react";
import  {Usercontext}  from './Usercontext.jsx';


export default function Userlogo() {
  // const { data: user } = useQuery(
  //     ["user"],
  //     (token) => {
  //       return axios.get('http://34.208.44.89:3006/user/currentuser',{headers: {"Authorization" : `Bearer ${token}`}}).then((res) => console.log(res.data));
  //     }
  //   );
  const navigate = useNavigate();
  const [user,setuser] = useContext(Usercontext);

  const { data: User,isError,status,} = useQuery(["user-data"], getusercall, {
    useErrorBoundary: true,
    suspense: true,
    onSuccess:(data) => {setuser(data)}
  });
  console.log("user", User, status, !status);

  
  if (status !== "success") {
    navigate("/");
  }
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        marginRight: "50px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Gravatar
          style={{ width: "2rem", height: "2rem" }}
          title={User?.data.name}
          email={User?.data.email}
        />
        <NavLink to="/updateuser" style={{ color: "black" }}>
          editprofile
        </NavLink>
      </div>
    </div>
  );
}
