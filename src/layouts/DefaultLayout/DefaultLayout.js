import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="mt-3 container">{children}</main>
    </div>
  );
}

export default DefaultLayout;
