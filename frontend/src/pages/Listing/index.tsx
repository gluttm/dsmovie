import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import "./style.css";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=10&page=0`).then((res) => {
      const data = res.data as MoviePage;
      setPageNumber(data.number);
    });
  }, []);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {" "}
          {pageNumber}
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
