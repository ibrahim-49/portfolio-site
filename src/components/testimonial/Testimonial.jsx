import React from "react";
import Title from "../title/Title";
import Slider from "react-slick";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Client1, Client2, Client3 } from "../../assets/index";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust speed (3000ms = 3 seconds)
  };

  const testimonials = [
    {
      img: Client1,
      name: "Mr Henrick",
      position: "Operational Manager",
      service: "For CMS Services.",
      date: "via LinkedIn - June 4, 2020 - July 12, 2019",
      feedback:
        "Working with Muhammad Ibrahim for our CMS needs has been a game-changer. His expertise in WordPress, combined with his proficiency in tools like Elementor and WPBakery, ensured that our website not only looks fantastic but also functions flawlessly. From the initial consultation to the final delivery, Muhammad's attention to detail and commitment to creating a mobile-friendly, seamless user experience was evident in every step. His ability to translate our ideas into a fully functional website exceeded our expectations.",
    },
    {
      img: Client2,
      name: "Mr Herry",
      position: "CEO of the company",
      service: "For UI & UX design.",
      date: "via Upwork - Feb 5, 2021 - Mar 22, 2020",
      feedback:
        "Muhammad Ibrahim's UI/UX services have transformed our digital presence. His keen eye for design and deep understanding of user experience principles resulted in a website that is not only visually stunning but also incredibly intuitive to navigate. He took the time to understand our brand and target audience, crafting a user interface that is both engaging and functional. The attention to detail in every element, from layout to responsiveness, has significantly improved our user engagement and satisfaction. We couldn't be happier with the outcome and highly recommend Muhammad for any UI/UX projects.",
    },
    {
      img: Client3,
      name: "Mr John Wick",
      position: "Operation Officer",
      service: "For Mobile App design.",
      date: "via Fiver - April 4, 2022 - Aug 22, 2023",
      feedback:
        "As an Operations Officer in an IT company, I focus on ensuring seamless and efficient operations that support the organization's growth and success. My role involves optimizing processes, managing resources, and coordinating across teams to deliver projects on schedule and within budget. I am dedicated to enhancing operational workflows, maintaining compliance with industry standards, and mitigating risks to ensure smooth execution. By building strong relationships with vendors and partners, I secure high-quality and cost-effective solutions for our technological needs.",
    },
  ];

  return (
    <section
      id="testimonial"
      className="w-full border-b-[1px] border-b-[#000] py-20 px-4 max-w-screen-xl mx-auto"
    >
      <div className="flex justify-center text-center items-center text-white">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings} className="text-white">
          {testimonials.map((test, index) => (
            <div className="w-full" key={index}>
              <div className="flex flex-col lgl:flex-row h-full">
                {/* Client Image and Details */}
                <div className="w-full lgl:w-[35%] bg-gray-800 p-4 flex flex-col">
                  <img
                    src={test.img}
                    alt={`Client ${index + 1} photo`}
                    className="p-2 h-72 object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h1 className="text-lg mt-1 p-4 font-bold text-gray-400 uppercase">
                        {test.name}
                      </h1>
                      <p className="px-4 mt-[-15px] text-red-500">
                        {test.position}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Testimonial Content */}
                <div className="w-full lgl:w-[60%] bg-gray-800 flex flex-col">
                  <div className="p-8 flex justify-between border-b-[1px] border-b-[#000]">
                    <div>
                      <h1 className="text-2xl tracking-wide font-medium">
                        {test.service}
                      </h1>
                      <p className="text-base text-gray-400 mt-2">
                        {test.date}
                      </p>
                    </div>
                    <div className="text-yellow-400 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <MdOutlineStarPurple500 key={i} />
                      ))}
                    </div>
                  </div>
                  <div className="flex-grow p-8">
                    <p className="text-gray-400">{test.feedback}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
