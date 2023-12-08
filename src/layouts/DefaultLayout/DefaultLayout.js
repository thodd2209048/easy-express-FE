import React from "react";
import PropTypes from "prop-types";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div>
      <main className="mt-5">{children}</main>
    </div>
  );
}

export default DefaultLayout;
