import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={40} className="pl-4" />
        </>
      ),
      href: "https://www.linkedin.com/in/johnfallan6/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={40} className="pl-4"  />
        </>
      ),
      href: "https://github.com/johnfallan6",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={40} className="pl-4" />
        </>
      ),
      href: "mailto:johnfallan6@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={40} className="pl-4" />
        </>
      ),
      href: "/John Allan_Resume 2022.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300 bg-header opacity-75" +
              " " +
              style
            }
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-darkBackground"
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
