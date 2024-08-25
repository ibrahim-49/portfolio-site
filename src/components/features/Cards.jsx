import React from "react";

const Cards = ({ title, des, icon }) => {
  return (
    <div className="w-full h-full  px-6 py-6 box- rounded-lg flex flex-col gap-3 bg-gradient-to-r from-[#1c1c1d] to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div>
        <span className="text-5xl text-left text-red-600 ">{icon}</span>
      </div>
      <div className="text-left">
        <h2 className="text-1xl font-bold">{title}</h2>
        <p className="text-sm">{des}</p>
      </div>
    </div>
  );
};

export default Cards;
