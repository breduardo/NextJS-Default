import React, { Component, Fragmentm, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = (props) => {
  const {
    data,
    page = 1,
    pageLimit = 10,
    dataLimit,
    totalRecords,
    onChangePage,
    params = {},
  } = props;
  const [pages] = useState(Math.round(totalRecords / pageLimit));
  const [currentPage, setCurrentPage] = useState(parseInt(page));

  const totalPages = Math.ceil(totalRecords / pageLimit);

  useEffect(() => {
    onChangePage(currentPage);
  }, [currentPage]);

  const goToNextPage = (event) => {
    event.preventDefault();
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = (event) => {
    event.preventDefault();
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    event.preventDefault();
    const pageNumber = Number(event.target.textContent);

    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    // not yet implemented
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1;

    var from = Math.max(1, currentPage - 2);
    var to = Math.min(totalPages, currentPage + 2);
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += 1;
    }

    // return range;
    return range;
    // return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  var query = params;
  query = Object.entries(query)
    .filter(([i, val]) => val !== "")
    .reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

  //   console.log()

  let queryNextPage = {};
  let queryPreviousPage = {};
  if (query["page"]) {
    queryNextPage = { ...query, page: currentPage + 1 };
    queryPreviousPage = { ...query, page: currentPage - 1 };

    if (queryPreviousPage.page <= 0) queryPreviousPage.page = 1;
  }
  queryNextPage = new URLSearchParams(queryNextPage).toString();
  queryPreviousPage = new URLSearchParams(queryPreviousPage).toString();

  return (
    <nav>
      <ul className="pagination">
        {/* previous button */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href={"?" + queryPreviousPage}
            onClick={goToPreviousPage}
          >
            <IoChevronBackOutline />
          </a>
        </li>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => {
          if (query["page"]) {
            query["page"] = item;
          }
          let pages = new URLSearchParams(query).toString();

          return (
            <li
              key={index}
              className={`page-item ${page === item ? "active" : null}`}
            >
              <a className="page-link" href={"?" + pages} onClick={changePage}>
                {item}
              </a>
            </li>
          );
        })}

        {/* next button */}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            href={"?" + queryNextPage}
            onClick={goToNextPage}
          >
            <IoChevronForwardOutline />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default React.memo(Pagination);
