// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import ReactPaginate from "react-paginate";
// import Items from "./Items";
// import { Pagination } from "react-bootstrap";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function PaginatedItems({ itemsPerPage }) {
//   const [itemOffset, setItemOffset] = useState(0);

//   const handlePageClick = (event) => {
//     console.log(event);
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       {/* <Items currentItems={currentItems} /> */}
//       <ReactPaginate
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="<"
//         nextLabel=">"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         previousLinkClassName="page-link"
//         nextClassName="page-item"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-item"
//         breakLinkClassName="page-link"
//         containerClassName="pagination"
//         activeClassName="active"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }

// export default PaginatedItems;
