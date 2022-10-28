import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className="w-full h-full bg-gradient-to-b from-darkBackground to-black p-4 text-paragraph py-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <h2 className="text-4xl font-bold inline border-b-4 border-primary text-header tracking-wider">
            Contact
          </h2>
          <h3 className="py-6 text-2xl my-6 tracking-widest">
            Submit the form below to get in touch with me...
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/4cf554e6-7828-4f8d-aee5-a473896ffae6"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              aria-label="name input"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-paragraph rounded-md text-header focus:outline-none"
            />
            <input
              aria-label="email input"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-paragraph rounded-md text-header focus:outline-none"
            />
            <textarea
              aria-label="message input"
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 border-paragraph rounded-md text-header focus:outline-none"
            ></textarea>
            <button type="submit" className="text-header text-2xl bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
