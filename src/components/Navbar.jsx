import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu, GiSkullCrossedBones } from "react-icons/gi";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const [bar, setBar] = useState(true);
  const [bgNav, setBgNav] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 90) {
      setBgNav(false);
    } else {
      setBgNav(true);
    }
  });
  return (
    <>
      <div
        className={`w-full h-16 ${
          !bgNav && "bg-white bg-opacity-60"
        } text-white flex items-center justify-center fixed top-0 right-0 z-20 shadow-sm`}
      >
        <nav className="lg:max-w-[85vw] container w-full mx-auto flex flex-row justify-between">
          <h1 className="font-medium text-2xl text-primary select-none">
            MusYan
          </h1>
          <menu className="text-black hidden md:flex flex-row items-center gap-12">
            <Link
              to="hero"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              duration={500}
              className="font-bold cursor-pointer hover:text-slate-400 transition-all duration-300"
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
              className="font-bold cursor-pointer hover:text-slate-400 transition-all duration-300"
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
              className="font-bold cursor-pointer hover:text-slate-400 transition-all duration-300"
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
              className="font-bold cursor-pointer hover:text-slate-400 transition-all duration-300"
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={40}
              duration={500}
              className="font-bold cursor-pointer hover:text-slate-400 transition-all duration-300"
            >
              Contact
            </Link>
          </menu>
          <div className="md:hidden">
            <span
              onClick={() => {
                setBar(!bar);
              }}
              className="cursor-pointer flex flex-row items-center justify-center gap-6 text-black "
            >
              {bar ? (
                <GiHamburgerMenu
                  size={32}
                  className="transition-all duration-300 ease-out"
                />
              ) : (
                <GiSkullCrossedBones
                  size={32}
                  className="transition-all duration-300 ease-out"
                />
              )}
            </span>
          </div>
        </nav>
      </div>
      {!bar && (
        <NavMobile
          setBar={() => {
            setBar(!bar);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
