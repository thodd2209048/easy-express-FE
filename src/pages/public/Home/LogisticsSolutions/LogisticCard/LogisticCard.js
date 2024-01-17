import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./LogisticCard.module.scss";
import images from "~/assets/images";

LogisticCard.propTypes = {};

function LogisticCard({ className, images, cardTitle, children }) {
  return (
    <div className={clsx(styles.wrapper, className, "card")}>
      <img src={images} class="card-img-top" alt="" />
      <div className="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        {children}
      </div>
    </div>
  );
}

export default LogisticCard;
