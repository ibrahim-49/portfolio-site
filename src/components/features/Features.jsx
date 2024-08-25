import React from "react";
import { FaBeer, FaBusinessTime } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import Title from "../title/Title";
import Cards from "../features/Cards";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full border-b-[1px] border-b-[#000] py-20 px-28 max-w-screen-xl mx-auto"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-12 text-gray-400">
        <Cards
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac cursus dui."
          icon={<FaBusinessTime />}
        />
        <Cards
          title="App Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac cursus dui."
          icon={<MdDeveloperMode />}
        />
        <Cards
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac cursus dui."
          icon={<FaCode />}
        />
        <Cards
          title="SEO Optimization"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac cursus dui."
          icon={<SiProgress />}
        />
        <Cards
          title="UI & UX Design"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac cursus dui."
          icon={<SiAntdesign />}
        />
        <Cards
          title="WordPress Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ac cursus dui."
          icon={<GrWordpress />}
        />
      </div>
    </section>
  );
};

export default Features;
