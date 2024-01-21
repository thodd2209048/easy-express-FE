import React from "react";
import PropTypes from "prop-types";

import styles from "./TopImage.module.scss";
import clsx from "clsx";

TopImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

function TopImage({ className, image, title, imagePosition = "center" }) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div
        className={clsx(styles.image)}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: imagePosition,
        }}
      >
        <div className={clsx(styles.cover, "p-2")}>
          {!!title && <h1>{title}</h1>}
        </div>
      </div>
    </div>
  );
}

export default TopImage;
