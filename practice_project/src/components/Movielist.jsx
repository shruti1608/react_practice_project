import "../styles/moviefilterStyle.css";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Suspense, useState } from "react";
import "../styles/moviefilterStyle.css";
import Movieresult from "./Movieresult";



export default function Movielist({onChange,movielist}) {

  const [searchText, setSearchtext] = useState("");
  const [limit, setlimit] = useState(12);
  const [sortData, setSortdata] = useState("genres");
  const [sortOrder, setSortorder] = useState("asc");
  const [page, setPage] = useState(1);
  

  function getmovies(e) {
    e.preventDefault();
   
    onChange({ limit, sortData, sortOrder, searchText, skipData:(page-1)*limit });
  
  }


  function nextpage(e) {
    e.preventDefault();
    
    onChange({ limit, sortData, sortOrder, searchText, skipData:(page)*limit });
  }
  function previouspage(e) {
    e.preventDefault();
    console.log("page changed");
   
    onChange({ limit, sortData, sortOrder, searchText, skipData:(page-1)*limit });
  }

  console.log("movielist", movielist);
  return (
    <div className="moviecontainerStyle">
      <div className="moviesubcontainerStyle">
        <input
          className="form-control movieinputStyle"
          style={{width:"300rem"}}
          type="text"
          placeholder="Search Text"
          value={searchText}
          onChange={(e) => setSearchtext(e.target.value)}
        />

        <select
          className="form-select movieselectStyle"
          value={sortData}
          onChange={(e) => setSortdata(e.target.value)}
        >
          <option value="genres">genres</option>
          <option value="cast">cast</option>
          <option value="title">title</option>
          <option value="year">year</option>
          <option value="imdb.rating">imdb.rating</option>
        </select>
        <select
          className="form-select movieselectStyle"
          value={sortOrder}
          onChange={(e) => setSortorder(e.target.value)}
        >
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
        <input
          className="form-control movieselectStyle"
          type="number"
          placeholder="limit"
          value={limit}
          onChange={(e) => setlimit(e.target.value)}
        />
        <input
          className="form-control movieselectStyle"
          type="number"
          placeholder="skip"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="submit"
          style={{ backgroundColor: "orange" }}
          onClick={getmovies}
        >
          Search
        </button>
      </div>
      <div>
        {movielist != null ? (
          <>
            <div className="row">
              {movielist.data.map((item) => {
                return (
                  //console.log("item",item._id),
                  <Suspense fallback={<p>loding....</p>}>
                    
                    <Movieresult
                      key={item._id}
                      title={item["title"]}
                      poster={item["poster"]}
                      plot={item["plot"]}
                      id={item["_id"]}
                      year={item["year"]}
                      rating={item["imdb"]["rating"]}
                    />
                  </Suspense>
                );
              })}
            </div>
            <div className="paginationStyle">
              <button onClick={previouspage}>
                {" "}
                <TfiAngleLeft color="lightcoral" size={"1rem"} />
              </button>
              <button onClick={nextpage}>
                {" "}
                <TfiAngleRight color="lightcoral" />
              </button>
            </div>
          </>
        ) : (
          <p>Loding...</p>
        )}
      </div>
    </div>
  );
}
