import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./PageTitle.module.scss";

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
