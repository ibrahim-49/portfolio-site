import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-w-screen-xl mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 mx-auto text-gray-400">
      <div className="w-full h-auto">
        <div className="py-2 px-8">
          <h1 className="font-bold text-xl text-red-500">Address</h1>
          <p className="mt-4">
            <a
              href="tel:+923067125919"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Call Us: +923067125919
            </a>
          </p>
          <p className="break-all mt-2">
            <a
              href="mailto:engineer.mohammadibrahim@gmail.com"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Email Us: engineer.mohammadibrahim@gmail.com
            </a>
          </p>
          <p className="mt-2">Location: Lahore Township</p>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="px-8 py-2">
          <h1 className="text-red-500 font-bold text-xl">Quick Links</h1>
          <p className="mt-2">
            <a
              href="#About"
              className="hover:text-red-500 transition-colors duration-300"
            >
              About
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#Portfolio"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Portfolio
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#Services"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Services
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#Blogs"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Blogs
            </a>
          </p>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="px-8 py-2">
          <h1 className="text-red-500 font-bold text-xl">Resources</h1>
          <p className="mt-2">
            <a
              href="#Authentication"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Authentication
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#System Status"
              className="hover:text-red-500 transition-colors duration-300"
            >
              System Status
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#Terms of Services"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Terms of Services
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#Pricing"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Pricing
            </a>
          </p>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="px-8 py-2">
          <h1 className="text-red-500 font-bold text-xl">Developers</h1>
          <p className="mt-2">
            <a
              href="#Documentation"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Documentation
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#API Reference"
              className="hover:text-red-500 transition-colors duration-300"
            >
              API Reference
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#Open Source"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Open Source
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#Support"
              className="hover:text-red-500 transition-colors duration-300"
            >
              Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
