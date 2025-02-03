import React from "react";
import { SiAirchina } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex justify-evenly items-center text-white w-full bg-transparent h-50 ">
      <div className="flex-col flex gap-2 justify-start w-80 p-2 ">
        <button className="bg-transparent border-1 border-white hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          WEB ANALYTICS
        </button>
        <button className="bg-transparent border-1 border-white hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          EMAIL MARKETING
        </button>
        <button className="bg-transparent border-1 border-white hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          SEO 2.0
        </button>
      </div>
      <div className="flex gap-2 justify-center w-full">
        <a
          href="#"
          className="flex flex-col justify-around bg-orange-600 p-5 text-black border-gray-200 rounded-lg shadow-sm  "
        >
          <h5 className="mb-2 font-medium ">
            UNIQUE BUSINESS SOLUTIONS
          </h5>
          <SiAirchina className="text-4xl"/>
        </a>
        <a
          href="#"
          className=" flex flex-col justify-around bg-gray-500 p-5 border-gray-200 rounded-lg shadow-sm "
        >
          <div className="flex justify-end">
          <FiArrowUpRight className="text-4xl " />
          </div>
          <h5 className="mb-2 font-medium text-3xl flex ">
            OUR CASE STUDIES
          </h5>
        </a>
        <a
          href="#"
          className="flex flex-col justify-around bg-amber-200 p-5 text-black border-gray-200 rounded-lg shadow-sm  "
        >
          <h5 className="mb-2 font-medium ">
            SUCCESSFUL PROJECTS
          </h5>
          <h5 className="mb-2 font-medium text-3xl flex ">
            700+
          </h5>
        </a>
      </div>
    </div>
  );
}

export default Footer;
