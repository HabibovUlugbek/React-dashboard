import React from "react";

const Pagination = () => {
  const data = [1, 2, 3];
  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link">Prev</a>
        </li>
        {data.map((li, id) => (
          <li key={id} className="page-item">
            <a href="#" className="page-link">{li}</a>
          </li>
        ))}
        <li  className="page-item">
          <a href="#" className="page-link">Next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
