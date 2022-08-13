import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-darkBackground via-darkBackground to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-primary">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-header">Hi there!</h2>
          <p className="text-paragraph py-4">
            I'm a Full Stack developer with 2 years of experience building and designing websites and mobile applications. I am currently working with technologies such as React, React-Native, Tailwind, and NodeJS.
          </p>
          <div>
            <button className="group text-header w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-200 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src="/images/profileimage.jpg" alt="Me in Scotland" className="rounded-2xl mx-auto w-2/3 md:w-full max-w-100px ml-7"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
