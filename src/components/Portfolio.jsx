import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "/images/blog.png",
      alt: "john allan blog",
      name: "John Allan - Blog",
      href: "https://blog-seven-flame.vercel.app/",
    },
    {
      id: 2,
      src: "/images/btxLogo.png",
      alt: "backyard texas logo",
    },
    {
      id: 3,
      src: "/images/btxLogo.png",
      alt: "backyard texas logo",
    },
  ];

  return (
    <div
      id="portfolio"
      name="portfolio"
      className="bg-gradient-to-b from-darkBackground to-black text-paragraph w-full md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold text-header inline border-b-4 border-primary tracking-wider">
            Portfolio
          </h2>
          <h3 className="py-8 mt-6 text-2xl tracking-widest">
            Check out some of my work right here!
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, alt, href, name }) => (
            <div key={id} className="shadow-md shadow-secondary rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center text-header">
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110 hover:text-primary">
                  <a href={href} target="_blank" rel="noreferrer">
                    {name}
                  </a>
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
