import React from "react";
import KeyFeature from "./keyFeature";
import LeaderShipIcon from "../../../assets/TimeLineLogo/logo1.svg";
import ResponsibilityIcon from "../../../assets/TimeLineLogo/logo2.svg";
import FlexibilityIcon from "../../../assets/TimeLineLogo/logo3.svg";
import SolveTheProblemIcon from "../../../assets/TimeLineLogo/logo4.svg";
import TimeLineImage from "../../../assets/Images/TimeLineImage.png";
import { useState } from "react";

const timeLineData = [
  {
    icon: LeaderShipIcon,
    heading: "LeaderShip",
    subHeading: "Fully committed to the success company",
  },
  {
    icon: ResponsibilityIcon,
    heading: "Responsibility",
    subHeading: "Students will always be our top priority",
  },
  {
    icon: FlexibilityIcon,
    heading: "Flexibility",
    subHeading: "The ability to switch is an important skills",
  },
  {
    icon: SolveTheProblemIcon,
    heading: "Solve the problem",
    subHeading: "The ability to switch is an important skills",
  },
];
const TimelineSection = () => {
  return (
    <div className="lg:flex lg:flex-row bg-emerald-50  p-5 justify-center  gap-15 relative">
      {/*Left Box */}
      <div className="flex flex-col pt-6   mb-10  ">
        {timeLineData.map((data, index) => {
          return (
            <div key={index}>
              <KeyFeature
                icon={data.icon}
                heading={data.heading}
                subHeading={data.subHeading}
              ></KeyFeature>
              {index < timeLineData.length - 1 && (
                <div className="dashArrowLine border-l border-dashed h-12 border-l-emerald-400  ml-10 "></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Box */}
      <div className="relative drop-shadow-xl drop-shadow-gray-400">
        <img
          src={TimeLineImage}
          alt="timelineImage"
          className="w-[100%] h-[500px] md:h-[90%] object-fill "
        />
        <div className="w-[75%] h-52 lg:h-30 bg-yellow-500 absolute  -lg:translate-1/2 left-20 bottom-5 lg:bottom-0 cursor-grab animate-bounce rounded drop-shadow drop-shadow-yellow-400">
          {/* content */}
          <div className="lg:flex lg:flex-row flex flex-col items-center  justify-evenly h-full">
            <div className="flex  gap-6">
              <div className="text-white font-bold text-4xl ">10</div>
              <div className="text-yellow-200">
                YEARS <br /> EXPERIENCES
              </div>
            </div>
            <div className="lg:w-0.5 lg:h-20 w-40 h-0.5 bg-white"></div>
            <div className="flex gap-6">
              <div className="text-white font-bold text-3xl">250</div>
              <div className="text-yellow-200">
                TYPES OF <br /> COURSES
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
