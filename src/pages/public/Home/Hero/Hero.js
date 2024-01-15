import React, { useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Hero.module.scss";
import { useNavigate } from "react-router-dom";
import paths from "~/routes/paths";

Hero.propTypes = {};

function Hero(props) {
  const navigate = useNavigate();
  const inputRef = useRef();
  return (
    <div className={clsx(styles.wrapper, "container")}>
      <div className={clsx(styles.trackingContainer)}>
        <p
          className={clsx(styles.trackingTitle, "text-white fs-2 text-center")}
        >
          Track Your Shipment
        </p>
        <div className={clsx(styles.form, "p-1 rounded")}>
          <input
            ref={inputRef}
            className={clsx(styles.input)}
            type="text"
            placeholder="Enter tracking number"
          />
          <button
            className={clsx(styles.button, "btn btn-primary")}
            onClick={() =>
              navigate(
                `${paths.trackingShipment}?shipment=${inputRef.current.value}`
              )
            }
          >
            Track
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
