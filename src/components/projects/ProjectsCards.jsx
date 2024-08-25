import React from "react";
import { FaGlobe } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
const ProjectsCards = ({ title, des, src }) => {
  return (
    <div className="w-full h-full  px-6 py-6 box- rounded-lg flex flex-col gap-3 bg-gradient-to-r from-[#1c1c1d] to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <di className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className=" w-full h-40 object-cover group-hover:scale-110 duration-300"
          src={src}
          alt="src"
        />
      </di>
      <div className="flex">
        <div className="w-full mt-2">
          <h1 className="text-base font-bold text-red-500">{title}</h1>
        </div>
        <div className="flex">
          <span className="w-10 h-10 text-lg rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-600 duration-300 cursor-pointer">
            <BsGithub />
          </span>

          <span className="w-10 h-10 text-lg rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-600 duration-300 cursor-pointer">
            <FaGlobe />
          </span>
        </div>
      </div>
      <div className="text-base text-gray-300">{des}</div>
    </div>
  );
};

export default ProjectsCards;
