import React from "react";
import Title from "../title/Title";
import ProjectsCards from "./ProjectsCards";
import { Mobile, Ui, Seo, Web, Wordpress, Business } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full border-b-[1px] border-b-[#000] py-20 px-20 max-w-screen-xl mx-auto"
    >
      <div className="text-center">
        <Title
          title="Explore My Portfolio and Share Your Feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 text-white">
        <ProjectsCards
          title="Business Strategy"
          des="A strong business strategy aligns resources with goals, driving growth through innovation, market analysis, and strategic partnerships."
          src={Business}
        />

        <ProjectsCards
          title="App Development"
          des="Effective app development combines user-centric design with agile methodologies, ensuring a seamless, functional, and scalable product"
          src={Mobile}
        />
        <ProjectsCards
          title="Web Development"
          des="Web development focuses on creating responsive, fast, and user-friendly websites by integrating modern technologies and design principles."
          src={Web}
        />
        <ProjectsCards
          title="Ux & Ui Designer"
          des="UI and UX design focus on creating easy-to-use, attractive interfaces that improve user experience. They balance looks and function to ensure users have a smooth"
          src={Ui}
        />
        <ProjectsCards
          title="WordPress Development"
          des="WordPress development leverages the flexibility and power of the WordPress platform to create customizable, scalable websites."
          src={Wordpress}
        />
        <ProjectsCards
          title="Seo Optimization"
          des="SEO optimization enhances website visibility by improving search engine rankings through strategic keyword use, quality content, and technical adjustments."
          src={Seo}
        />
      </div>
    </section>
  );
};

export default Projects;
