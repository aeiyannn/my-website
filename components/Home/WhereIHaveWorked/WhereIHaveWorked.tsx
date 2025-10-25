import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import ExperienceItem from "./Descriptions/Zetsol"; // General experience renderer
import { portfolioConfig } from "../../../configuration";

export default function WhereIHaveWorked() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeCompany = portfolioConfig.experience[activeIndex];

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary" />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Main content */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
        justify-center items-center md:items-start"
      >
        <CompaniesBar
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <ExperienceItem
          position={activeCompany.position}
          companyName={activeCompany.companyName}
          from={activeCompany.from}
          to={activeCompany.to}
          tasks={activeCompany.tasks}
          website={activeCompany.website}
        />
      </section>
    </div>
  );
}

const CompaniesBar = ({ activeIndex, setActiveIndex }) => {
  const [barPosition, setBarPosition] = React.useState(-2);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col md:flex-row w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 
      justify-start sm:justify-center items-start sm:items-center"
    >
      {/* Vertical bar */}
      <div className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[140px] translate-y-1 md:w-0.5 rounded md:order-1 order-2">
        <motion.div
          animate={{ y: barPosition }}
          className="absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary"
        ></motion.div>
      </div>

      {/* Company buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          {portfolioConfig.experience.map((v, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                setBarPosition(v.barPosition);
                setBarAbovePosition(v.barAbovePosition);
              }}
              className={`flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary
                hover:bg-ResumeButtonHover rounded font-mono  
                py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
                ${
                  activeIndex === i
                    ? "bg-ResumeButtonHover text-AAsecondary"
                    : "text-gray-500"
                }`}
            >
              {v.companyName}
            </button>
          ))}
        </div>

        {/* Mobile horizontal bar */}
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div
            animate={{ x:'50%' }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
