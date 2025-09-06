import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import IntroVideo from "../assets/Images/HomePageVideo.mp4";
import HighlightText from "../components/cores/HomePage/HighlightText";
import CTAButton from "../components/cores/HomePage/CTAButton";
import CodeBlocks from "../components/cores/HomePage/CodeBlocks";
import TimelineSection from "../components/cores/HomePage/TimelineSection";
import LearningLanguageSection from "../components/cores/HomePage/LearningLanguageSection";
import InstructorSection from "../components/cores/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/cores/HomePage/ExploreMore";
import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <div>
      {/* Section1 start`` */}
      <div className="relative  w-11/12  flex flex-col items-center justify-center max-w-maxContent  mx-auto text-white ">
        <Link className="mt-16" to={"/signup"}>
          <div className="mx-auto rounded-full bg-emerald-900 font-bold text-emerald-200 transition-all duration-200 hover:scale-105 group shadow-sm shadow-emerald-600 w-fit">
            <div className="flex items-center gap-2 justify-center  group-hover:bg-emerald-950 rounded-full py-2 px-10">
              <p>Become an instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold mt-8">
          Fuel Your Career with
          <HighlightText text={"Coding Mastery"} />
        </div>
        <div className="text-gray-500 mt-5 text-center md:text-xl font-bold p-2 lg:w-[70%]  ">
          Unlock your coding potential — anytime, anywhere. With our immersive
          online courses, you’ll learn at your own pace through real-world
          projects, interactive quizzes, and expert feedback designed to fuel
          your growth and launch your tech career.
        </div>

        {/* Buttons */}
        <div className="flex gap-10 mt-8">
          <CTAButton active={true} linkTo={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkTo={"/signup"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* video */}
        <div className="mx-auto relative p-2  mt-20  z-0 flex flex-col justify-center items-center  ">
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-gradient-to-b from-green-400  blur-3xl opacity-60 rounded-full -z-10" />

          <video
            className=" lg:w-[960px] lg:h-[540px]  object-cover  rounded-md shadow-[20px_20px_0px_rgba(60,479,133,0.3)]  "
            autoPlay
            muted
            loop
            controls
          >
            <source src={IntroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Typing code of subSection-1 */}
        <div className="w-full">
          <CodeBlocks
            position={`lg:flex-row`}
            heading={
              <div className="text-3xl  font-bold">
                Unlock Your
                <HighlightText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkTo: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkTo: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One\n</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-500"}
            backgroundGradient={"bg-red-500"}
          />
        </div>

        {/*Typing code of subSection-2 */}
        <div className="">
          <CodeBlocks
            position={`lg:flex-row-reverse`}
            heading={
              <div className="text-3xl font-bold">
                Start
                <HighlightText text={"coding in seconds"} />
                with our online courses
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkTo: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkTo: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One\n</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-red-500"}
            backgroundGradient={"bg-yellow-500"}
          />
        </div>
        <ExploreMore />
      </div>
      {/* Section1 End`` */}

      {/* Section2 Start */}
      <div className="bg-white ">
        <div className="homepage_bg h-[310px]  ">
          <div className="w-11/12 max-w-maxContent flex items-center justify-center gap-5 mx-auto h-full ">
            {/* Button1 */}
            <div className="flex flex-row justify-center items-center gap-7 text-white mt-10 font-bold">
              <CTAButton linkTo={"/signup"} active={true}>
                <div className="flex justify-center items-center gap-3">
                  Explore-Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              {/* Button2 */}
              <CTAButton linkTo={"/login"} active={false}>
                <div className="flex justify-center items-center gap-2">
                  Learn More
                </div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col  gap-7  ">
          {/* Content */}
          <div className="lg:flex lg:flex-row flex flex-col   gap-5 mx-auto items-center justify-center mb-15 mt-3 ">
            <div className="text-4xl font-bold -mt-12  lg:w-[45%]">
              Learn what employers want
              <HighlightText text={"Do what others can't"} />{" "}
            </div>

            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              <div className="font-semibold text-gray-600 pb ">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkTo={"/signup"}>
                <div className="font-semibold "> Learn More</div>
              </CTAButton>
            </div>
          </div>
          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>
      {/* Section2 End */}

      {/* Section3`` */}
      <div className="w-11/12 max-w-maxContent flex flex-col justify-center items-center mx-auto mb-4 text-white">
        <InstructorSection />
        <h2 className="text-center text-4xl font-semibold mt-10">
          Review from other Learners
        </h2>

        {/* Review Slider here */}
      </div>

      {/* Footer`` */}
      <Footer />
    </div>
  );
};

export default Home;
