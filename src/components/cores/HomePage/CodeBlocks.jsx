import React from "react";
import CTAButton from "./CTAButton";
import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`lg:flex ${position} w-full lg:px-50  my-10 lg:mt-30  justify-between gap-10`}
    >
      {/* Section 1 */}
      <div className="lg:w-[50%] flex flex-col   mb-10 lg:mb-1  gap-8">
        {heading}
        <div className="text-gray-500 text-xl  font-bold">{subheading}</div>
        <div className="flex gap-7 ">
          <CTAButton active={ctabtn1.active} linkTo={ctabtn1.linkTo}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkTo={ctabtn2.linkTo}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 */}

      <div className="relative h-fit flex flex-row  text-[16px]  py-4 lg:w-[50%] border border-gray-700  ">
        {/*HW- BG gradient */}
        <div
          className={`absolute w-80 h-40 ${backgroundGradient} opacity-50 blur-3xl    left-30 top-20  -translate-1/2 `}
        ></div>

        <div className="text-center flex flex-col w-[10%] text-emerald-400 font-mono  font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex flex-col font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 5000, ""]}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
