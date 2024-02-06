import React, { useState } from "react";

// components
import PropTypes from "prop-types";
import { Input } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ className, placeholder, ...props }) => {
  const [passwordStatus, setPasswordStatus] = useState(true);
  return (
    <div className="relative">
      <Input
        type={passwordStatus ? "password" : "text"}
        className={`outline-none bg-transparent py-2 px-[20px] border-[1px] border-gray-400 w-full ${className}`}
        placeholder={placeholder}
        data-testid="password"
        {...props}
      />

      <div
        data-testid="password-status"
        className="absolute top-[35%] right-[10px]"
      >
        {passwordStatus ? (
          <FaEye
            data-testid="password-hidden"
            className="cursor-pointer"
            onClick={() => setPasswordStatus(false)}
            size={20}
          />
        ) : (
          <FaEyeSlash
            data-testid="password-show"
            className="cursor-pointer"
            onClick={() => setPasswordStatus(true)}
            size={20}
          />
        )}
      </div>
    </div>
  );
};

PasswordInput.prototype = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordInput;
