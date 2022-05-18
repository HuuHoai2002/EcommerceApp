import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`min-h-[40px] inline-flex items-center justify-center ${className} bg-cpink`}
      onClick={onClick}>
      {children && children}
    </button>
  );
};

export default Button;
