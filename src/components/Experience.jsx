import React from "react";

const Experience = () => {
  const icons = [
    {
      id: 1,
      name: "HTML",
      src: "/images/html.png",
      alt: "html logo",
    },
    {
      id: 2,
      name: "CSS",
      src: "/images/css.png",
      alt: "css logo",
    },
    {
      id: 3,
      name: "JavaScript",
      src: "/images/javascript.png",
      alt: "javescript logo",
    },
    {
      id: 4,
      name: "React",
      src: "/images/react.png",
      alt: "react logo",
    },
    {
      id: 5,
      name: "Angular",
      src: "/images/angular.png",
      alt: "angular logo",
    },
    {
      id: 6,
      name: "React Native",
      src: "/images/reactnative.png",
      alt: "react native logo",
    },
    {
      id: 7,
      name: "Node.JS",
      src: "/images/node.png",
      alt: "node logo",
    },
    {
      id: 8,
      name: "MongoDB",
      src: "/images/mongodb.png",
      alt: "mongo db logo",
    },
    {
      id: 9,
      name: "GraphQL",
      src: "/images/graphql.png",
      alt: "grpah QL logo",
    },
    {
      id: 10,
      name: "Git",
      src: "/images/git.png",
      alt: "git logo",
    },
    {
      id: 11,
      name: "Bootstrap",
      src: "/images/bootstrap-4.png",
      alt: "bootstrap logo",
    },
    {
      id: 12,
      name: "Tailwind",
      src: "/images/tailwind.png",
      alt: "tailwind logo",
    },
  ];

  return (
    <div
      id="experience"
      name="experience"
      className="bg-gradient-to-b from-black to-darkBackground w-full h-full py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-header">
        <div>
          <h2 className="text-4xl font-bold border-b-4 border-primary p-2 inline tracking-wider">
            Experience
          </h2>
          <h3 className="py-8 mt-6 text-2xl tracking-widest text-paragraph">
            These are the main technologies I've worked with...
          </h3>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {icons.map(({ id, src, alt, name }) => (
            <div
              key={id}
              className="shadow-md shadow-secondary hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt={alt} className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
