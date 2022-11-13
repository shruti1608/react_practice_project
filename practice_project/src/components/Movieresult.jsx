import { NavLink } from "react-router-dom";

export default function Movieresult({ title, poster,plot,id ,year,rating}) {
  return (
    <div className="col">
      
      <div className="card" style={{ width: "18rem" , height:"30rem", marginTop:"5rem",backgroundColor:"orange"}}>
      <NavLink to={`movie/${id}`}>
        <img className="card-img-top" src={poster} alt="Card image cap" style={{height:"20rem"}} /> 
        </NavLink>

        <div className="card-body">
          <h4>{title}</h4>
          {/* <h5>{rating}</h5> */}
          {/* <h5>year:{year}</h5> */}
          {/* <p className="card-text">{plot}</p> */}
        </div>
      </div>
      </div>
   
  );
}
