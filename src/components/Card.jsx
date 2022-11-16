import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiOutlineEye } from "react-icons/ai";

const Card = () => {
  return (
    <section id="portofolio" className="relative">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-black">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-90 bg-black bg-cover lg:bg-center bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(card-img.jpeg)",
            }}
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="w-full rounded-lg bg-opacity-80 bg-black p-8">
                <h1 className="text-white font-semibold text-5xl">Portfolio</h1>
                <p className="mt-4 text-lg text-blueGray-200 text-white font-medium">
                  Berikut ini adalah beberapa project yang saya kerjakan
                  menggunakan HTML, TailwindCSS, Javascript, Reactjs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4 flex flex-row overflow-x-auto">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400 hover:bg-red-600 cursor-pointer">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://al-quran-84180.web.app/"
                    >
                      <AiOutlineEye size={28} />
                    </a>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Al-Qur'an Digital
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                  Project ini menggunakan Reactjs, Tailwindcss, DaisyUi, dan Firebase
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://undangan-74771.web.app/TulisNamaDisini"
                      className="fas fa-retweet"
                    ></a>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Undangan Pernikahan Online
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Project kali ini saya membuat undangan online menggunakan
                    reactjs, tailwindcss dan firebase
                  </p>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">On Going</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">On Going</p>
                  <p className="mt-2 mb-4 text-blueGray-500">On Going</p>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Card;
