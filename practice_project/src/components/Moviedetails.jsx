import { useContext } from "react";
import { useParams } from "react-router-dom"
import { Moviecontext } from "./Moviecontext";


export default function Moviedetails(){
    const [singlemovie,setsinglemovie] = useContext(Moviecontext);
    const {id} = useParams();
   
    console.log("single movie",singlemovie)
    return(
        <div>
        <div>welcome to movie website {id}</div>
        
        </div>
    )
}