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
      <div className="grid grid-cols-3 gap-8 text-gray-400">
        <Cards
          title="Business Strategy"
          des="A strong business strategy aligns resources with goals, driving growth through innovation, market analysis, and strategic partnerships. It ensures competitive advantage by adapting to changes and maximizing opportunities."
          icon={<FaBusinessTime />}
        />
        <Cards
          title="App Development"
          des="Effective app development combines user-centric design with agile methodologies, ensuring a seamless, functional, and scalable product that meets market needs while staying ahead of technological trends."
          icon={<MdDeveloperMode />}
        />
        <Cards
          title="Web Development"
          des="Web development focuses on creating responsive, fast, and user-friendly websites by integrating modern technologies and design principles. It ensures an optimal online experience that meets both user needs and business objectives."
          icon={<FaCode />}
        />
        <Cards
          title="SEO Optimization"
          des="SEO optimization enhances website visibility by improving search engine rankings through strategic keyword use, quality content, and technical adjustments. It drives organic traffic and increases online presence, leading to higher engagement and conversions."
          icon={<SiProgress />}
        />
        <Cards
          title="UI & UX Design"
          des="UI and UX design prioritize creating intuitive, visually appealing interfaces that enhance user interaction and satisfaction. By focusing on both aesthetics and functionality, they ensure a seamless and engaging experience that aligns with user needs and business goals."
          icon={<SiAntdesign />}
        />
        <Cards
          title="WordPress Development"
          des="WordPress development leverages the flexibility and power of the WordPress platform to create customizable, scalable websites. It involves building responsive themes, plugins, and functionalities tailored to meet specific business needs while ensuring ease of use and content management."
          icon={<GrWordpress />}
        />
      </div>
    </section>
  );
};

export default Features;
