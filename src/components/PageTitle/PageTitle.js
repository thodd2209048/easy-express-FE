import React from "react";
import PropTypes from "prop-types";

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

function PageTitle({ title }) {
  return (
    <div className="pb-3">
      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;
