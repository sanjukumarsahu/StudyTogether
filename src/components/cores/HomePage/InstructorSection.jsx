import React from "react";
import InstructorImage from "../../../assets/Images/instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center gap-10 lg:gap-1 mt-15 justify-center items-center">
      
      {/* Right side (text goes on top in mobile, right in large) */}
      <div className="w-full lg:w-[50%] flex flex-col lg:ml-26 gap-20 lg:gap-28 text-center lg:text-left px-4">
        <div className="text-4xl font-semibold">
          <p className="">Become an </p>
          <HighlightText text={"instructor"} />
          <p className="text-gray-600 font-medium text-[17px] lg:w-[80%] mt-4 mx-auto lg:mx-0">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
        </div>

        <div className="w-fit font-semibold mx-auto lg:mx-0">
          <CTAButton active={true} linkTo={"/signup"}>
            <div className="flex justify-center items-center gap-2">
              Start Learning Today
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>

      {/* Left side (image goes below in mobile, left in large) */}
      <div className="w-full lg:w-[50%] lg:py-10 flex justify-center drop-shadow-[10px_10px_0_rgba(255,255,255,1)] drop-shadow-emerald-300">
        <img
          src={InstructorImage}
          alt="Instructor"
          className="w-[80%] h-[500px] lg:h-[120%] transition-all duration-300 ease-in-out 
               hover:rotate-9 hover:-translate-y-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default InstructorSection;
