import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./MissionCard.module.scss";
import { Button } from "react-bootstrap";

MissionCard.propTypes = {};

function MissionCard({ className, title, children, contentPosition }) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        className,
        `card position-absolute top-0 ${contentPosition}-0 d-none d-md-flex`
      )}
    >
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{children}</p>
        <Button>Learn more</Button>
      </div>
    </div>
  );
}

export default MissionCard;
