import React from "react";
import "./Pagination.css"
import "../../index.css"

export const PageNav = ({ page, setPage }) => {
  return (
    <div className="container-pagination">
      <button className="pagination__button"
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}>
        Back
      </button>

      <p className="pagination__page">Page {page}</p>

      <button className="pagination__button" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};
