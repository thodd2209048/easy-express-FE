import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import styles from "./DropDownHead.module.scss";

DropDownHead.propTypes = {};

function DropDownHead({ title, toggleDrop, isDrop = false, className }) {
  return (
    <div
      className={clsx(className, styles.wrapper, "p-2")}
      onClick={toggleDrop}
    >
      <span className={clsx(styles.title, isDrop ? styles.titleActive : null)}>
        {title}
      </span>
      <FontAwesomeIcon
        className={clsx(styles.icon)}
        icon={isDrop ? faChevronDown : faChevronUp}
      />
    </div>
  );
}

export default DropDownHead;
