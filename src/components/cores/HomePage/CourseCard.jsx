import React from "react";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData.heading;
  return (
    <div
      className={`w-80 h-60 rounded-xl p-6 transition-all duration-300 cursor-pointer shadow-md
        ${
          isActive
            ? "bg-gray-50 text-black  scale-105  drop-shadow-[10px_10px_0_rgba(255,255,0,1)]  "
            : "bg-emerald-800 hover:scale-105 hover:shadow-lg"
        }
      `}
      onClick={() => setCurrentCard(cardData.heading)}
    >
      <div className="flex flex-col justify-between h-full ">
        {/* Heading */}
        <h2 className="font-bold text-xl mb-3">{cardData.heading}</h2>

        {/* Description */}
        <p className=" text-sm mb-4">{cardData.description}</p>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-gray-400 mb-3"></div>

        {/* Footer: Level & Lesson Count */}
        <div className="flex justify-between text-sm ">
          <span>{cardData.level}</span>
          <span>{cardData.lessionNumber} Lessons</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
