import React, { useState } from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constant/index";
import { TfiMenuAlt } from "react-icons/tfi";
import { Logo } from "../../assets/index";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div className="flex w-full flex-wrap h-20 bg-gray-900 sticky top-0 z-50 items-center justify-around border-b-[1px] border-b-gray-700">
      <div className="w-10">
        <img src={Logo} alt="logo" className="w-16 rounded-md" />
      </div>

      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-4xl p-2 md:hidden w-10 h-10 inline-flex items-center justify-center cursor-pointer rounded-full bg-black text-white"
      >
        <TfiMenuAlt />
      </span>
      <ul
        className={`md:inline-flex gap-4 py-12 px-8 text-sm ${showMenu ? "flex flex-col w-full" : "hidden"}`}
      >
        {navLinksdata.map((navlink) => (
          <li
            className="text-slate-300 duration-300 hover:text-red-600 cursor-pointer"
            key={navlink._id}
          >
            <Link
              activeClass="active"
              to={navlink.Link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {navlink.titLe}
            </Link>
          </li>
        ))}
      </ul>

      {/* {showMenu && (
          <div className="w-[80%] overflow-scroll h-screen absolute top-0 left-0 bg-red-900 p-4 text-white"></div>
        )} */}
    </div>
  );
};

export default Navbar;
