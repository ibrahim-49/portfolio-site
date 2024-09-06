import React from "react";
import Title from "../title/Title";
import ProjectsCards from "./ProjectsCards";
import { Mobile, Ui, Seo, Web, Wordpress, Business } from "../../assets/index";

// Array of project data
const projectsData = [
  {
    title: "Business Strategy",
    des: "A strong business strategy aligns resources with goals, driving growth through innovation, market analysis, and strategic partnerships.",
    src: Business,
    alt: "Business Strategy Image",
  },
  {
    title: "App Development",
    des: "Effective app development combines user-centric design with agile methodologies, ensuring a seamless, functional, and scalable product.",
    src: Mobile,
    alt: "App Development Image",
  },
  {
    title: "Web Development",
    des: "Web development focuses on creating responsive, fast, and user-friendly websites by integrating modern technologies and design principles.",
    src: Web,
    alt: "Web Development Image",
  },
  {
    title: "UI & UX Design",
    des: "UI and UX design focus on creating easy-to-use, attractive interfaces that improve user experience. They balance looks and function to ensure users have a smooth interaction.",
    src: Ui,
    alt: "UI & UX Design Image",
  },
  {
    title: "WordPress Development",
    des: "WordPress development leverages the flexibility and power of the WordPress platform to create customizable, scalable websites.",
    src: Wordpress,
    alt: "WordPress Development Image",
  },
  {
    title: "SEO Optimization",
    des: "SEO optimization enhances website visibility by improving search engine rankings through strategic keyword use, quality content, and technical adjustments.",
    src: Seo,
    alt: "SEO Optimization Image",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full border-b-[1px] border-b-[#000] py-20 px-4 max-w-screen-xl mx-auto"
      aria-labelledby="projects-title"
    >
      {/* Title */}
      <div className="text-center">
        <Title
          title="Explore My Portfolio and Share Your Feedback"
          des="My Projects"
          id="projects-title"
        />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-4 text-white md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectsCards
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            alt={project.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
