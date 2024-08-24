import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HeroImage } from "../../assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full flex items-center py-20 px-28 max-w-screen-xl mx-auto"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-lg font-normal">WELCOME</h3>
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-red-600">M. IBRAHIM</span>
          </h1>
          <h3 className="text-4xl font-bold">
            a <span>{text}</span>
            <Cursor
              cursorBlinking={false}
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h3>
          <p className="text-base leading-7 tracking-wide">
            Full Stack React Developer specializing in building complex web
            applications with React and Node.js. Skilled in API integration,
            responsive design with Tailwind CSS, and focused on delivering
            scalable solutions and exceptional user experiences.
          </p>
        </div>

        <div className="pt-10">
          <h2 className="text-white text-lg">FIND ME ON</h2>
          <div className="flex gap-4 pt-3">
            <a href="#" className="bannerIcon text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bannerIcon text-white">
              <FaTwitter />
            </a>
            <a href="#" className="bannerIcon text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img
          src={HeroImage}
          alt="Hero"
          className="bannnerss w-[500px] h-[500px] z-10"
        />
      </div>
    </section>
  );
};

export default Banner;
