import React from "react";

// components
import PropTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} text-white_ border-0 font-semibold bg-black_ py-[9px] px-[20px]`}
      data-testid="button"
      {...props}
    >
      {children}
    </button>
  );
};

Button.prototype = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
