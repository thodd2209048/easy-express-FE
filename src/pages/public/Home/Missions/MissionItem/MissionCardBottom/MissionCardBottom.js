import React from "react";
import PropTypes from "prop-types";

import styles from "./MissionCardBottom.module.scss";
import clsx from "clsx";
import { Button } from "react-bootstrap";

MissionCardBottom.propTypes = {};

function MissionCardBottom({ className, title, children, image }) {
  return (
    <div className={clsx(styles.wrapper, className, "card d-md-none")}>
      <img src={image} alt="" className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{children}</p>
        <Button>Learn more</Button>
      </div>
    </div>
  );
}

export default MissionCardBottom;
