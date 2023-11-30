import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-darkBackground text-white">
      <div className=" flex flex-col md:flex-row justify-between p-8 md:mx-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4 pt-2">TriPedia</h1>
          <p className=" text-sm">
            With TriPedia you can experience new travel and the best tourist
            destinations that we have to offer
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Destinations
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Museum Macan
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Museum Art:1 New
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Museum Harry Darsono
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-3 pt-5 md:pt-0">About</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Contact Us
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Testimonial
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Rating
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow us</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <a href="#" target="_blank">
              <FaLinkedin
                size={25}
                className=" hover:text-brightColor transition-all cursor-pointer"
              />
            </a>
            <RiTwitterXFill
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <a
            href="https://www.linkedin.com/in/arjunasatria/"
            target="_blank"
            className=" text-brightColor"
          >
            {" "}
            Arjuna Satria
          </a>{" "}
          | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
