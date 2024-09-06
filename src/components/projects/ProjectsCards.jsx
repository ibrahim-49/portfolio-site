import React from "react";
import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const ProjectsCards = ({ title, des, src }) => {
  return (
    <div className="w-full h-full px-6 py-6 rounded-lg flex flex-col gap-3 bg-gradient-to-r from-[#1c1c1d] to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300">
      {/* Image Section */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-40 object-cover group-hover:scale-110 duration-300"
          src={src}
          alt={title} // Improved alt attribute
        />
      </div>

      {/* Card Content */}
      <div className="flex justify-between items-center">
        <div className="w-full mt-2">
          <h1 className="text-base font-bold text-red-500">{title}</h1>
        </div>
        <div className="flex gap-2">
          <a
            href="#" // Placeholder URL; replace with actual URL if needed
            aria-label={`View ${title} on GitHub`}
            className="w-10 h-10 text-lg rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-600 duration-300 cursor-pointer"
          >
            <BsGithub />
          </a>
          <a
            href="#" // Placeholder URL; replace with actual URL if needed
            aria-label={`View ${title} website`}
            className="w-10 h-10 text-lg rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-600 duration-300 cursor-pointer"
          >
            <FaGlobe />
          </a>
        </div>
      </div>

      <div className="text-base text-gray-300">{des}</div>
    </div>
  );
};

export default ProjectsCards;
