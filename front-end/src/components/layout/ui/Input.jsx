import React from "react";

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-[#3d3d3d] border-none text-white pl-4 pr-10 py-1.5 w-full rounded-sm focus-visible:ring-1 focus-visible:ring-white ${className}`}
      {...props}
    />
  );
};

export default Input;
