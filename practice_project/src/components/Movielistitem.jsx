import Movielist from "./Movielist";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getmoviescall } from "../apicalls";
export default function Movielistitem(){

    const [filters, setFilters] = useState({});
    const { data: movielist } = useQuery(
        ["movies-list", filters],
        getmoviescall,
        {
          useErrorBoundary: true,
          suspense: true,
          staleTime: Infinity,
          keepPreviousData: true,
        }
      );


    return(
        <div>
            <Movielist onChange={(filters) => {setFilters(filters)}} 
                       movielist={movielist} />
        </div>
    )
}