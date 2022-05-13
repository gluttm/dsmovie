import React from "react";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { MoviePage } from "types/movie";

type Props = {
  page: MoviePage;
  onChangePage: Function;
};

export default function Pagination({ page, onChangePage }: Props) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          onClick={() => onChangePage(page.number - 1)}
          className="dsmovie-pagination-button"
          disabled={page.first}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          onClick={() => onChangePage(page.number + 1)}
          className="dsmovie-pagination-button"
          disabled={page.last}
        >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
