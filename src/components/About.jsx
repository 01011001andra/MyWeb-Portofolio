import React from "react";
import { BsTelegram } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";
import MainLayout from "../layouts/MainLayout";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <section id="about" className=" pt-36 pb-32">
      <MainLayout>
        <div className=" flex flex-wrap">
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            className="w-full px-4 mb-10 lg:w-1/2"
          >
            <h4 className="font-bold text-primary text-lg">Tentang Saya</h4>
            <h2 className="font-bold text-2xl max-w-xl">
              Ini adalah Tentang Saya
            </h2>
            <p className="text-slate-500 mt-4">
              Uy, Kenalin namaku Yandra Muslim, Biasa dipanggil Yandra. Saya
              adalah mahasiswa jurusan Teknik Informatika dan saat ini masih
              kuliah semeser 3. Fans Berat One Piece:D
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            className="w-full px-4 lg:w-1/2"
          >
            <h3 className="font-semibold text-lg">Mari Berteman</h3>
            <p className="mt-4 text-slate-500">
              Kamu Bisa Contact Saya Di Sini
            </p>
            <div className="w-full py-4 flex flex-row item-center">
              <a
                href="https://t.me/MusYan2"
                target="_blank"
                rel="noreferrer"
                className="rounded-full w-10 h-10 border-[1px] hover:bg-primary outline-slate-500 flex justify-center items-center"
              >
                <BsTelegram size={30} />
              </a>
              <a
                href="https://www.instagram.com/yandramuslim/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full w-10 h-10 border-[1px] hover:bg-primary outline-slate-500 flex justify-center items-center"
              >
                <GrInstagram size={26} />
              </a>
              <a
                href="https://wa.me/62895611861777"
                target="_blank"
                rel="noreferrer"
                className="rounded-full w-10 h-10 border-[1px] hover:bg-primary outline-slate-500 flex justify-center items-center"
              >
                <RiWhatsappFill size={32} />
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      </MainLayout>
    </section>
  );
};

export default About;
