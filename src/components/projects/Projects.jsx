import React from "react";
import Title from "../title/Title";
import ProjectsCards from "./ProjectsCards";
import { Mobile, Ui, Seo, Web, Wordpress, Business } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full border-b-[1px] border-b-[#000] py-20 px-28 max-w-screen-xl mx-auto"
    >
      <div className="text-center">
        <Title
          title="Explore My Portfolio and Share Your Feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-8 text-white">
        <ProjectsCards
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit."
          src={Business}
        />

        <ProjectsCards
          title="App Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit."
          src={Mobile}
        />
        <ProjectsCards
          title="Web Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit."
          src={Web}
        />
        <ProjectsCards
          title="Ux & Ui Designer"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit."
          src={Ui}
        />
        <ProjectsCards
          title="WordPress Development"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit."
          src={Wordpress}
        />
        <ProjectsCards
          title="Seo Optimization"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa nibh, dapibus rhoncus elementum vel, faucibus ac elit."
          src={Seo}
        />
      </div>
    </section>
  );
};

export default Projects;
