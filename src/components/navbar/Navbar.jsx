import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constant/index";
import { Logo } from "../../assets/index";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 bg-gray-900 items-center justify-around border-b-[1px] border-b-gray-700">
      <div className="w-20 ">
        <img src={Logo} alt="logo" className="w-16 rounded-full" />
      </div>
      <div>
        <ul className="flex items-center gap-10 font-navbarFont text-sm ">
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
      </div>
    </div>
  );
};

export default Navbar;
