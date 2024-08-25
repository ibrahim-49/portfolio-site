import React from "react";
import Title from "../title/Title";
import ProjectsCards from "./ProjectsCards";

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
      <div className="grid grid-cols-3 gap-14 text-white">
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
      </div>
    </section>
  );
};

export default Projects;
