import React from "react";
import PropTypes from "prop-types";

import styles from "./GlobalStyles.module.scss";
import clsx from "clsx";

GlobalStyles.propTypes = {
  children: PropTypes.node,
};

function GlobalStyles({ children }) {
  return <div className={clsx(styles.wrapper)}>{children}</div>;
}

export default GlobalStyles;
