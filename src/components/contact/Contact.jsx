import React, { useState } from "react";
import Title from "../title/Title";
import { Contactform } from "../../assets/index";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => /\S+@\S+\.\S+/.test(email);

  const phoneValidation = (phone) => /^[0-9]+$/.test(phone);

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg("");

    if (!username) {
      setErrMsg("Username is required");
    } else if (!phoneValidation(phoneNumber)) {
      setErrMsg("Please enter a valid phone number");
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email");
    } else if (!subject) {
      setErrMsg("Subject is required");
    } else if (!message) {
      setErrMsg("Message is required");
    } else {
      setSuccessMsg("Your message has been sent successfully");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username, phoneNumber, email, subject, message);
    }
  };

  return (
    <section
      id="contact"
      className="w-full border-b-[1px] border-b-[#000] py-20 px-6 md:px-16 lg:px-28 max-w-screen-xl mx-auto"
    >
      <div className="flex justify-center text-center items-center text-white text-lg mb-10">
        <Title title="Contact" des="Contact With Me" />
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[35%] h-full bg-gray-800 rounded-lg mb-10 lg:mb-0">
          <img
            src={Contactform}
            alt="Contact form"
            className="p-4 h-72 object-cover mx-auto"
          />
          <div className="px-4 py-4">
            <h1 className="text-3xl font-bold text-white">M Ibrahim</h1>
            <p className="text-lg text-red-600">Full Stack Developer</p>
            <p className="text-gray-400">
              A full stack developer builds and manages both front-end and
              back-end of applications, ensuring seamless functionality and user
              experience across all layers.
            </p>
            <p className="text-base text-gray-400 mt-2 mb-14">
              <span className="font-bold text-lg">Phone: </span>
              +923067125919
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[60%] h-full bg-gray-800 flex flex-col justify-between gap-6 p-6 rounded-lg">
          <form className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="text-gray-400 mb-2" htmlFor="username">
                  Your Name
                </label>
                <input
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  className="contactInput"
                  aria-label="Username"
                  aria-required="true"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="text-gray-400 mb-2" htmlFor="phoneNumber">
                  Phone No.
                </label>
                <input
                  id="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="text"
                  className="contactInput"
                  aria-label="Phone number"
                  aria-required="true"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="contactInput"
                aria-label="Email"
                aria-required="true"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-400 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type="text"
                className="contactInput"
                aria-label="Subject"
                aria-required="true"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                cols="51"
                rows="6"
                className="bg-[#191b1e] text-gray-400 w-full"
                aria-label="Message"
                aria-required="true"
              ></textarea>
            </div>

            <div>
              <button
                onClick={handleSend}
                className="w-full h-12 bg-[#141518] rounded-md text-base text-gray-400 uppercase hover:text-white mt-6"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </div>
            {successMsg && <p className="text-green-500 mt-4">{successMsg}</p>}
            {errMsg && <p className="text-red-500 mt-4">{errMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
