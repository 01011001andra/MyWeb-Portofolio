import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const Card2 = () => {
  return (
    <div id="skills" className="max-w-8xl pt-36 pb-16  bg-slate-200">
      <div className="container flex flex-col mb-16">
        <h2 className="mb-4 text-2xl font-bold text-center">Skills</h2>

        <div className="mt-4 container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimationOnScroll
            animateIn="animate__flipInX"
            className="flex items-start rounded-xl bg-white p-4 shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
              <AiFillHtml5 size={30} />
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">HTML</h2>
              <p className="mt-2 text-sm text-gray-500">Markup Language</p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn="animate__flipInX"
            className="flex items-start rounded-xl bg-white p-4 shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
              <SiCss3 size={30} />
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">CSS</h2>
              <p className="mt-2 text-sm text-gray-500">Styling</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInX"
            className="flex items-start rounded-xl bg-white p-4 shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
              <SiJavascript size={25} />
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">Javascript</h2>
              <p className="mt-2 text-sm text-gray-500">Programming Language</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInX"
            className="flex items-start rounded-xl bg-white p-4 shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
              <SiTailwindcss size={30} />
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">TailwindCSS</h2>
              <p className="mt-2 text-sm text-gray-500">CSS Framework</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInX"
            className="flex items-start rounded-xl bg-white p-4 shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
              <FaReact size={30} />
            </div>

            <div className="ml-4">
              <h2 className="font-semibold">Reactjs</h2>
              <p className="mt-2 text-sm text-gray-500">Javascript Library</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__flipInX"
            className="flex items-start rounded-xl bg-white p-4 shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
              <FiFigma size={30} />
            </div>

            <AnimationOnScroll animateIn="animate__flipInX" className="ml-4">
              <h2 className="font-semibold">Figma</h2>
              <p className="mt-2 text-sm text-gray-500">Prototyping</p>
            </AnimationOnScroll>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Card2;
