import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "/images/btxLogo.png",
    },
    {
      id: 2,
      src: "/images/btxLogo.png",
    },
    {
      id: 3,
      src: "/images/btxLogo.png",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-darkBackground to-black text-paragraph w-full md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-header inline border-b-4 border-primary tracking-wider">
            Portfolio
          </p>
          <p className="py-8 mt-6 text-2xl tracking-widest">
            Check out some of my work right here! COMING SOON!!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-secondary rounded-lg">
              <img
                src={src}
                alt="Logo for BTX custom boards"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center text-header">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
