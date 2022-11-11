import React from "react";
import { Link } from "react-scroll";
import MainLayout from "../layouts/MainLayout";
import { TypeAnimation } from "react-type-animation";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
} from "react-scroll-motion";

const Hero = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <section id="hero" className="pt-20 lg:p-36 ">
          <MainLayout>
            <div className="flex flex-wrap ">
              <div className="w-full self-center px-4 lg:w-1/2 ">
                <Animator animation={batch(Fade(), MoveOut(0, -100))}>
                  <h1 className="text-primary md:text-xl md:font-bold">
                    <div className="font-bold text-2xl text-dark mt-1 lg:text-2xl">
                      Hai... Aku
                      <div className="text-sm lg:text-2xl mb-1">
                        <TypeAnimation
                          sequence={["Yandra Muslim", 2000, "MusYan", 2000]}
                          cursor={true}
                          repeat={Infinity}
                          style={{ fontSize: "2em" }}
                        />
                      </div>
                    </div>
                  </h1>

                  <h2 className="font-medium text-lg mb-3 text-dark lg:text-2xl">
                    Mahasiswa Informatika <br /> Politeknik Negeri Batam
                  </h2>
                  <p className="font-medium text-slate-400 lg: text-lg mb-8 leading-relaxed">
                    Selamat Datang
                    <span className="text-dark block">Di Web Portofolioku</span>
                  </p>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={30}
                    duration={500}
                    className="cursor-pointer text-base bg-primary px-7 py-3 rounded-full text-white hover:shadow-lg hover:bg-teal-400 hover:opacity-90 transition-all duration-300 ease-in-out"
                  >
                    Contact Me!
                  </Link>
                </Animator>
              </div>

              <div className="w-full self-end px-4 lg:w-1/2">
                <Animator animation={batch(Fade(), MoveOut(0, -100))}>
                  <div className="mt-10 lg:mt-0 lg:right-0">
                    <img
                      src="hero-img.jpeg"
                      alt="Yandra"
                      className="max-w-full w-[350px] h-[300px]  lg:w-[400px] lg:h-[400px] mx-auto rounded-xl object-cover "
                    />
                  </div>
                </Animator>
              </div>
            </div>
          </MainLayout>
        </section>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Hero;
