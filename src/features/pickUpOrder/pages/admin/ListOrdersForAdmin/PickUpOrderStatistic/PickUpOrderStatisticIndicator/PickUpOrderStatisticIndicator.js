import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import styles from "./PickUpOrderStatisticIndicator.module.scss";

PickUpOrderStatisticIndicator.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};

function PickUpOrderStatisticIndicator({ title, value, icon, color }) {
  return (
    <div className="flex-column flex-md-row mt-2 px-3 py-2 border rounded">
      <div className={clsx(styles.top, "gap-2 fs-3")}>
        <FontAwesomeIcon icon={icon} color={color} />
        <span className="fs-4">{title}</span>
      </div>
      <p className="mt-2 mb-0 fs-3">{value}</p>
    </div>
  );
}

export default PickUpOrderStatisticIndicator;
