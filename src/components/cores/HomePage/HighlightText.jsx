import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-blue-700 via-green-500 to-indigo-500 inline-block text-transparent bg-clip-text font-bold p-1 ">
      {text}
    </span>
  );
};

export default HighlightText;
