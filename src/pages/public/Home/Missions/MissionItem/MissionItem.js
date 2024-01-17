import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import MissionCard from "./MissionCard/MissionCard";
import styles from "./MissionItem.module.scss";
import MissionImage from "./MissionImage/MissionImage";
import MissionCardBottom from "./MissionCardBottom/MissionCardBottom";

MissionItem.propTypes = {};

function MissionItem({ title, children, image, contentPosition = "end" }) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        `rounded d-flex flex-column flex-md-row position-relative`
      )}
    >
      <MissionImage image={image} />
      <MissionCard title={title} contentPosition={contentPosition}>
        {children}
      </MissionCard>
      <MissionCardBottom title={title} image={image}>
        {children}
      </MissionCardBottom>
    </div>
  );
}

export default MissionItem;
