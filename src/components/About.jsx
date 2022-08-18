import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-black to-darkBackground text-paragraph py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary text-header tracking-wider">
            About
          </p>
        </div>
        <p className="mt-10 text-2xl tracking-widest">
          I’m a Full-Stack developer located in Austin, Tx. I have a serious
          passion for learning, all things creative, and working with
          individuals with disabilities. I’m a student and teacher at heart - I
          love to share knowledge and skills to help others (and myself) grow.
        </p>
        <br />
        <p className="text-2xl tracking-widest">
          A well-organized problem solver with high attention to detail. I love
          making things and anything music related - playing, watching, listening. I appreciate
          visual arts in all its forms, from movies and tv, to photography and
          painting. 
        </p>
        <br />
        <p className="text-2xl tracking-widest">
          My mission is to always learn and create, and to make the web a more
          accessible place for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
