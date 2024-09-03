import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HeroImage } from "../../assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full flex flex-col-reverse md:flex-row md:gap-10 items-center px-5 max-w-screen-xl mx-auto border-b-[1px] border-b-black"
    >
      <div className="w-full md:w-1/2 md:pr-5">
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

      <div className="w-full flex justify-center items-center ">
        <img
          src={HeroImage}
          alt="Hero"
          className="bannnerss w-auto h-[550px] z-10 object-scale-down"
        />
        <div className="bottom-55 absolute w-[400px] h-[460px] bg-gradient-to-r from-[#1a222f] to-[#031635] sha-shadowOne justify-center items-center"></div>
      </div>
    </section>
  );
};

export default Banner;
