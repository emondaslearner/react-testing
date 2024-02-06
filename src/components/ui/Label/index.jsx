import React from "react";

// components
import PropTypes from "prop-types";

const Label = ({ children, htmlFor, className, ...props }) => {
  return (
    <label data-testid="label" htmlFor={htmlFor} {...props} className={`text-[16px] font-semibold ${className}`}>
      {children}
    </label>
  );
};

Label.prototype = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string
};

export default Label;
