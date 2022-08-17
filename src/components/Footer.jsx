import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} className="icon" />
        </>
      ),
      href: "https://www.linkedin.com/in/johnfallan6/",
      name: "LinkedIn",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} className="icon" />
        </>
      ),
      href: "https://github.com/johnfallan6",
      name: "GitHub",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} className="icon" />
        </>
      ),
      href: "mailto:johnfallan6@gmail.com",
      name: "Email",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} className="icon" />
        </>
      ),
      href: "/John Allan_Resume 2022.pdf",
      download: true,
      name: "Resume ",
    },
  ];
  return (
    <div name="footer" className=" bg-black px-6 py-2 w-full h-full">
      <div className="grid items-center justify-center">
        <ul className="flex">
          {links.map(({ id, child, href, download, name }) => (
            <li key={id} className={"footer"}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3"
                download={download}
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
        <br />
      </div>
      <div className=" flex text-s text-paragraph justify-center p-4">
        © Copyright, John Allan, 2022
      </div>
    </div>
  );
};

export default Footer;
