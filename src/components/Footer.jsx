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
        },
        {
          id: 2,
          child: (
            <>
             <FaGithub size={30} className="icon" />
            </>
          ),
          href: "https://github.com/johnfallan6",
        },
        {
          id: 3,
          child: (
            <>
              <HiOutlineMail size={30} className="icon" />
            </>
          ),
          href: "mailto:johnfallan6@gmail.com",
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
        },
      ];
  return (
    <div className=" bg-black items-center justify-center px-6 py-2 w-full ">
        <div className="flex items-center justify-center ">
     <ul className="flex">
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              "footer hover:text-darkBackground rounded-md mx-4" 
            }
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="p-4"
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
  


export default Footer