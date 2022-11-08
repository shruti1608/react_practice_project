export default function Movieresult({ title, poster,plot }) {
  return (
    <div className="col">
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
