import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="gap-4 flex flex-col mb-14">
      <h3 className="text-lg uppercasetext text-red-600 tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl uppercase text-white tracking-wide font-bold">
        {des}
      </h1>
    </div>
  );
};

export default Title;
