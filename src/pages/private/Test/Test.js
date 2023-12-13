import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import PaginatedItems from "./PaginatedItems";

Test.propTypes = {};

function Test({ currentItems }) {
  return (
    <>
      <PaginatedItems itemsPerPage={4} />
    </>
  );
}

export default Test;
