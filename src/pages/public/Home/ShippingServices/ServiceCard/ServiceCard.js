import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./ServiceCard.module.scss";
import { Link } from "react-router-dom";

ServiceCard.propTypes = {};

function ServiceCard({ className, image, children }) {
  return (
    <div className={clsx(styles.wrapper, className, "py-2")}>
      <img src={image} alt="" className={clsx(styles.image)} />
      <div className="card-body">
        <p className={clsx(styles.serviceName, "card-text text-center")}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
