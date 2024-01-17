import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

Section.propTypes = {};

function Section({ title, children, className }) {
  return (
    <div className={clsx("mt-5", className)}>
      <h3 className="text-center">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default Section;
