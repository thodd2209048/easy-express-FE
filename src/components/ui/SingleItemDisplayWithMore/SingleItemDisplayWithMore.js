import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./SingleItemDisplayWithMore.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRectangleXmark,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

SingleItemDisplayWithMore.propTypes = {
  item: PropTypes.object,
  idx: PropTypes.number,
  editComponent: PropTypes.func,
  deleteComponent: PropTypes.func,
};

function SingleItemDisplayWithMore({ keyInfo, children, className }) {
  return (
    <div className={clsx(styles.wrapper, "mt-1 row", className)}>
      <div className="col ">
        <div className="border rounded p-2">
          <div className={" row"}>
            <div className="col fw-bold">{children[0]}</div>
          </div>

          <div className={clsx(styles.itemInfo, "row")}>
            <div className="col">
              <div>{children.slice(1)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItemDisplayWithMore;
