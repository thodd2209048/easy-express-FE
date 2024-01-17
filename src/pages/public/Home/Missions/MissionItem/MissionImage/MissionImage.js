import React from "react";
import PropTypes from "prop-types";

import styles from "./MissionImage.module.scss";
import clsx from "clsx";

MissionImage.propTypes = {};

function MissionImage({ image }) {
  return (
    <div
      style={{
        height: "350px",
        width: "100%",
        backgroundImage: `url(${image})`,
      }}
      className={clsx(styles.wrapper, "rounded d-none d-md-flex")}
    ></div>
  );
}

export default MissionImage;
