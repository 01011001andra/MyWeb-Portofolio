import React from "react";
import { Link } from "react-scroll";

const NavMobile = (props) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-slate-200 z-10 flex flex-col justify-center items-center gap-10 duration-300">
      <Link
        to="hero"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={-100}
        duration={500}
        className="font-bold  text-3xl cursor-pointer hover:text-slate-400 transition-all duration-300"
        onClick={props.setBar}
      >
        Home
      </Link>
      <Link
        to="about"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={40}
        duration={500}
        className="font-bold text-3xl cursor-pointer hover:text-slate-400 transition-all duration-300"
        onClick={props.setBar}
      >
        About
      </Link>
      <Link
        to="portofolio"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={40}
        duration={500}
        className="font-bold text-3xl cursor-pointer hover:text-slate-400 transition-all duration-300"
        onClick={props.setBar}
      >
        Portofolio
      </Link>
      <Link
        to="skills"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={40}
        duration={500}
        className="font-bold text-3xl cursor-pointer hover:text-slate-400 transition-all duration-300"
        onClick={props.setBar}
      >
        Skills
      </Link>
      <Link
        to="contact"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={0}
        duration={500}
        className="font-bold text-3xl cursor-pointer hover:text-slate-400 transition-all duration-300"
        onClick={props.setBar}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavMobile;
