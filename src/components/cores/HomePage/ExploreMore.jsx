import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tagsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tagsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center">
        Unlock the <HighlightText text={"Power of code"} />
      </div>

      {/* Subheading */}
      <p className="text-center text-gray-400 text-base sm:text-lg font-semibold mt-2 sm:mt-3">
        Learn to build anything you can imagine
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center  gap-2 lg:w-[50%] lg:mx-auto mt-8 bg-emerald-900 py-2 px-3 text-gray-400 font-semibold rounded-lg sm:rounded-full">
        {tagsName.map((element, index) => (
          <div
            key={index}
            className={`text-sm sm:text-base px-4 py-2 rounded-full cursor-pointer transition-all duration-200 ${
              currentTab === element
                ? "bg-emerald-950 text-white"
                : "hover:bg-emerald-950 hover:text-white"
            }`}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Course Cards */}
      <div className="mt-10 lg:-mb-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-1 justify-items-center">
          {courses.map((element, index) => (
            <CourseCard
              key={element.heading}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
