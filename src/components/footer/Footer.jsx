import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-b-[1px] border-b-black grid grid-cols-4 gap-8 py-8 px-8 max-w-screen-xl mx-auto text-gray-400">
      <div className="w-full h-[250px]">
        <div className=" py-8 px-8">
          <h1 className="font-bold text-xl text-red-500">Address</h1>
          <p className="mt-4">
            <a href="tel:+923067125919">Call Us: +923067125919</a>
          </p>
          <p className="break-all mt-2">
            <a href="mailto:engineer.mohammadibrahim@gmail.com">
              Email Us: engineer.mohammadibrahim@gmail.com
            </a>
          </p>
          <p className="mt-2">Location: Lahore Township</p>
        </div>
      </div>
      <div className="w-full h-[250px]">
        <div className="px-8 py-8">
          <h1 className="text-red-500 font-bold text-xl ">Quick Links</h1>

          <p className="mt-2">
            <a href="#About">About</a>
          </p>

          <p className="mt-2">
            <a href="#Portfolio">Portfolio</a>
          </p>

          <p className="mt-2">
            <a href="#Services">Services</a>
          </p>

          <p className="mt-2">
            <a href="#Blogs">Blogs</a>
          </p>
        </div>
      </div>
      <div className="w-full h-[250px]">
        <div className="px-8 py-8">
          <h1 className="text-red-500 font-bold text-xl ">Resources</h1>

          <p className="mt-2">
            <a href="#Athuntication">Athuntication</a>
          </p>

          <p className="mt-2">
            <a href="#System Status">System Status</a>
          </p>

          <p className="mt-2">
            <a href="#Terms of Services">Terms of Services</a>
          </p>

          <p className="mt-2">
            <a href="#Pricing">Pricing</a>
          </p>
        </div>
      </div>
      <div className="w-full h-[250px]">
        <div className="px-8 py-8">
          <h1 className="text-red-500 font-bold text-xl ">Developers</h1>

          <p className="mt-2">
            <a href="#Documentation">Documentation</a>
          </p>

          <p className="mt-2">
            <a href="#API Reference">API Reference</a>
          </p>
          <p className="mt-2">
            <a href="#Open Source">Open Source</a>
          </p>
          <p className="mt-2">
            <a href="#Support">Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
