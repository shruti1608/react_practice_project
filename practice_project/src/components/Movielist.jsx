
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { getmoviescall } from "../apicalls";
import '../styles/moviefilterStyle.css';

export default function Movielist() {
  const [searchText, setSearchtext] = useState("");
  const [limit, setlimit] = useState("");
  const [sortData, setSortdata] = useState("");
  const [sortOrder, setSortorder] = useState("");
  const [skipData, setSkipdata] = useState("");

  function getmovies() {
    // axios
    //   .get("http://34.208.44.89:3006/movies", {
    //     params: {
    //       limit: limit,
    //       sort: sortData,
    //       sortOrder: sortOrder,
    //       searchText: searchText,
    //       skip: skipData,
    //     },
    //   })
    //   .then((res) => console.log(res.data));
   // const {data} = useQuery(['movies'],getmoviescall)
 //  getmoviescall();
   }
  
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
          aria-label="Default select example"
          value={sortOrder}
          onChange={(e) => setSortorder(e.target.value)}
        >
          <option selected value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
        <input
          className="form-control movieselectStyle"
          type="text"
          placeholder="limit"
          value={limit}
          onChange={(e) => setlimit(e.target.value)}
        />
        <input
          className="form-control movieselectStyle"
          type="text"
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
    </div>
  );
}
