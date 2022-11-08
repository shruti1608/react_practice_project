import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { getmoviescall} from "../apicalls";
import "../styles/moviefilterStyle.css";
import Movieresult from "./Movieresult";

export default function Movielist() {
  const [searchText, setSearchtext] = useState("");
  const [limit, setlimit] = useState();
  const [sortData, setSortdata] = useState("genres");
  const [sortOrder, setSortorder] = useState("asc");
  const [skipData, setSkipdata] = useState();
  const [movielist, setmovielist] = useState([]);

  // const {data:movie} = useQuery(["movies-list"], getmoviescall);
  // console.log("movie", movie.data[0].title);
//  const movie =   getmoviescall({limit,sortData,sortOrder,searchText,skipData})
//   // movie.then(res =>{ console.log(res.data);setmovielist(res.data)})

//   // console.log("movielist",movielist)
 

  function getmovies(e) {
    e.preventDefault();
    console.log([
      parseInt(limit),
      sortData,
      sortOrder,
      searchText,
      parseInt(skipData),
    ]);
    // getmoviescall({limit,sortData,sortOrder,searchText,skipData})
    const movie =   getmoviescall({limit,sortData,sortOrder,searchText,skipData})
    movie.then(res =>{ console.log(res.data);setmovielist(res.data)})
  
    
   
  }
  console.log("movielist",movielist)
  return (
    <div className="moviecontainerStyle">
      <div className="moviesubcontainerStyle">
        <input
          className="form-control movieinputStyle"
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
          value={skipData}
          onChange={(e) => setSkipdata(e.target.value)}
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
      {movielist != null ? 
      <>
           {movielist.map(item => {
            return <Movieresult title={item['title']} poster={item['poster']} plot={item['plot']}/>
          })}
          </>
 
      : null}
      </div>
    </div>
  );
}
