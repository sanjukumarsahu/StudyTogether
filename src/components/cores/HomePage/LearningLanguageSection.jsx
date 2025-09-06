import React from "react";
import HighlightText from "./HighlightText";
import CompareWithOthers from "../../../assets/Images/Compare_with_others.svg";
import KnowYourProgress from "../../../assets/Images/Know_your_progress.svg";
import PlanYourLessons from "../../../assets/Images/Plan_your_lessons.svg";
import CTAButton from "./CTAButton";

const LearningLanguageSection = () => {
  return (
    <div>
      {/* Heading */}
      <div className="w-11/12 max-w-maxContent  flex flex-col justify-center items-center mx-auto mt-10 pb-30  ">
        <div className=" flex flex-col items-center lg:w-[55%] mb-10">
          <div className="font-bold text-4xl text-gray-700 mb-2 text-center">
            Your swiss knife for
            <HighlightText text="learning any language" />
          </div>
          <div className="text-gray-600 font-semibold text-center mb-5 ">
            Using spin making learning multiple languages easy. with 20+
            languages realistic voice-over, progress tracking, custom schedule
            and more.
          </div>
          <div className="h-1 w-10 bg-emerald-300"></div>
        </div>

        {/* Cards */}
        <div className="lg:flex lg:relative mb-10">
          <img
            src={KnowYourProgress}
            alt=""
            className="lg:absolute lg:-left-80 lg:z-10 lg:hover:animate-bounce cursor-pointer"
          />
          <img
            src={CompareWithOthers}
            alt=""
            className="z-20 hover:animate-bounce cursor-pointer"
          />
          <img
            src={PlanYourLessons}
            alt=""
            className="lg:absolute lg:z-30 lg:-right-80 lg:hover:animate-bounce cursor-pointer"
          />
        </div>

        <CTAButton active={true} linkTo={"/signup"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
