import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import "./style.css";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

export default function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
      .then((res) => {
        const data = res.data as MoviePage;
        setPageNumber(data.number);
        setPage(res.data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <>
      <Pagination page={page} onChangePage={handlePageChange} />
      <div className="container">
        <div className="row">
          {page.content.map((movie, i) => (
            <div key={i} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
