export default function Movieresult({ title, poster,plot }) {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={poster} alt="Card image cap" />
        <div className="card-body">
          <p>{title}</p>
          <p className="card-text">{plot}</p>
        </div>
      </div>
    </div>
  );
}
