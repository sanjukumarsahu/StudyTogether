import React from "react";

const KeyFeature = ({ icon, heading, subHeading }) => {
  return (
    <div className="flex items-center gap-6 p-4  ">
      <div className="w-15 h-15 rounded-full bg-white p-4 ">
        <img src={icon} alt=""  className="w-full h-full object-contain"/>
      </div>
      <div className="">
        <p className="text-xl font-bold text-gray-700">{heading}</p>
        <p className="text-gray-500 font-semibold">{subHeading}</p>
      </div>
    </div>
  );
};

export default KeyFeature;
