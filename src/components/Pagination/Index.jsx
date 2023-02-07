import React from "react";

export const PageNav = ({ page, setPage }) => {
  return (
    <div>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}>
        Back
      </button>

      <p>Page {page}</p>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};
