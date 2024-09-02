import React from "react";
import Title from "../title/Title";
import { Contactform } from "../../assets/index";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full border-b-[1px] border-b-[#000] py-20 px-28 max-w-screen-xl mx-auto"
    >
      <div className="flex justify-center text-center items-center text-white text-lg">
        <Title title="Contact" des="Contact With Me" />
      </div>

      <div className="w-full">
        <div className="w-full h-[550px] flex justify-between">
          <div className="w-[35%] h-full bg-gray-800 rounded-lg ">
            <img
              src={Contactform}
              alt="form"
              className=" p-4	h-72 object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-white px-4">M Ibrahim</h1>
              <p className="text-lg text-red-600 px-4">Full Stack Developer</p>
              <p className="text-gray-400 px-4">
                A full stack developer builds and manages both front-end and
                back-end of applications, ensuring seamless functionality and
                user experience across all layers.
              </p>
              <p className="text-base text-gray-400 px-4 mt-2">
                <span className="font-bold text-lg">Phone: {""}</span>
                +923067125919
              </p>
            </div>
          </div>
          <div className="w-[60%] h-full bg-gray-800 flex flex-col justify-between gap-6 p-6 rounded-lg ">
            <form className="w-full flex flex-col gap-2 py-2">
              <div className=" w-full flex gap-4">
                <div className="w-1/2">
                  <p className="text-gray-400 mb-2">Your Name</p>
                  <input type="text" className="contactInput" />
                </div>
                <div className="w-1/2">
                  <p className="text-gray-400 mb-2">Phone no.</p>
                  <input type="text" className="contactInput" />
                </div>
              </div>
              <div className="w-full">
                <p className="text-gray-400 mb-2">Email</p>
                <input type="text" className="contactInput" />
              </div>
              <div className="w-full">
                <p className="text-gray-400 mb-2">Subject</p>
                <input type="text" className="contactInput" />
              </div>
              <div className="w-full flex flex-col ">
                <p className="text-gray-400 mb-2">Message</p>
                <textarea
                  cols="30"
                  rows="5"
                  className="bg-[#191b1e] text-gray-400"
                ></textarea>
              </div>
              <div>
                <button className="w-full h-12 bg-[#141518] rounded-md text-base text-gray-400 uppercase hover:text-white mt-6 ">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
