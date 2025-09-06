import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ children, active, linkTo }) => {
  return (
    <Link to={linkTo}>
      <div
        className={`text-center text-sm px-6 py-3 rounded-md ${
          active
            ? "bg-yellow-500 shadow-md shadow-yellow-500/50 text-black"
            : "bg-emerald-800 shadow-md shadow-emerald-500/50"
        } hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;
