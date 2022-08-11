import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-primary fixed px-4">
      <div>
        <h1 className="text-3xl ml-2">John Allan</h1>
      </div>
      <ul className="hidden md:flex text-secondary">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)}className="cursor-pointer pr-4 z-10">
       {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen">
        <li>Home</li>
      </ul>
    </div>
  );
};

export default NavBar;
