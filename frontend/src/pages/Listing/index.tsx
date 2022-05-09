import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React from "react";
import "./style.css";

export default function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 m-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 m-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 m-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 m-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 m-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
