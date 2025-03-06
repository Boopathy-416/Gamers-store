import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`p-2 rounded-md hover:bg-gray-700 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
