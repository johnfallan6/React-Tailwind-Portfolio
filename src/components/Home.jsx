import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-darkBackground via-darkBackground to-black py-20 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-primary">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl pt-20 sm:text-6xl font-bold text-header tracking-wider">
            Hi there!
          </h2>
          <p className="text-paragraph py-4 text-2xl max-w-auto tracking-widest">
            I'm a Full Stack developer with experience building and designing
            websites and mobile applications. I am currently working with
            technologies such as React, React-Native, Tailwind, and NodeJS. I'm
            looking opportunities to increase my knowledge and experience.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-header text-2xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-200 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/images/profileimage.jpg"
            alt="Me in Scotland"
            className="rounded-2xl mx-auto w-2/3  md:w-full  ml-10 my-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// img styling options

// sm:w-1/2
// max-w-100px
