import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

SubContentLayout.propTypes = {
  subTitle: PropTypes.string,
  children: PropTypes.node,
};

function SubContentLayout({ subTitle, children }) {
  return (
    <>
      <div className={clsx("mt-3 rounded row")}>
        <div className="col">
          <h4>{subTitle}</h4>
          {children}
        </div>
      </div>
    </>
  );
}

export default SubContentLayout;
