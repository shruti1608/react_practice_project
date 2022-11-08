import Gravatar from "react-gravatar";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getusercall } from "../apicalls";

export default function Userlogo(){
    
        // const { data: user } = useQuery(
        //     ["user"],
        //     (token) => {
        //       return axios.get('http://34.208.44.89:3006/user/currentuser',{headers: {"Authorization" : `Bearer ${token}`}}).then((res) => console.log(res.data));
        //     }
        //   );

        const {data:User} = useQuery(["user-data"],getusercall)
        console.log("user",User)

          return(
            <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginRight: "50px",
            }}
          >
            <div style={{display:"flex",flexDirection:"column"}}>
   
            <Gravatar
              style={{ width: "2rem", height: "2rem" }}
              title={User?.data.name}
              email={User?.data.email}
            />
            <NavLink to='/updateuser' style={{color:"black"}}>editprofile</NavLink>
            </div>
          </div>
          )
    
}