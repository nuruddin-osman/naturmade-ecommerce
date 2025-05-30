import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffc814] via-[#ffdc5e] to-[#ffc814] text-[#272935] py-20 w-full">
      <div className="container mx-auto flex flex-col items-center px-3">
        <h2 className="text-2xl md:text-5xl text-[#343438] font-montserrat font-bold my-4">
          How Can We Help You?
        </h2>
        <p className="text-sm md:text-lg text-center font-lato font-normal leading-normal text-[#343438] mb-5">
          If you have a product or nutrition question, or want to provide
          feedback, please reach out!
        </p>
        <button className="text-base md:text-2xl font-montserrat font-bold rounded-bl-3xl rounded-tr-3xl px-7 py-2 bg-[#FFF] text-[#343438] hover:text-[#000] hover:scale-105 transform transition-all ease-in-out duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
