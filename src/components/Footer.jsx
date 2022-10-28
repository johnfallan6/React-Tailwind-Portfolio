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
      alt: "LinkedIn Profile Link",
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
      alt: "GitHub Profile Link",
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
      alt: "Email Link",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} className="icon" onClick="" />
        </>
      ),
      name: "PDF Resume Download",
      type: "file",
      href: "/John Allan_Resume 2022 - September.pdf",
      alt: "PDF Resume Download",
      download: true,
    },
  ];
  return (
    <div
      id="footer"
      name="footer"
      className=" bg-black px-6 py-2 w-full h-full"
    >
      <div className="grid items-center justify-center">
        <ul className="flex">
          {links.map(({ id, child, href, download, type, name, alt }) => (
            <li key={id} className={"footer"}>
              <a
                name={name}
                href={href}
                alt={alt}
                target="_blank"
                rel="noreferrer"
                className="p-3"
                download={download}
                type={type}
              >
                {child}
              </a>
              <h4 className="footerlinks">{name}</h4>
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
