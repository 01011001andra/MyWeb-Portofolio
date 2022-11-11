import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv1xmev",
        "template_rqqdj0h",
        form.current,
        "UH7kQ9tv5_PF3RpL6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan Berhasil Terkirim");
          e.target.nama_lengkap.value = "";
          e.target.email.value = "";
          e.target.subject.value = "";
          e.target.message.value = "";
        },
        (error) => {
          console.log(error.text);
          alert("Pesan Gagal Dikirim");
          e.target.nama_lengkap.value = "";
          e.target.email.value = "";
          e.target.subject.value = "";
          e.target.message.value = "";
        }
      );
  };
  return (
    <div
      id="contact"
      className="w-full flex items-center justify-center bg-blueGray-200"
    >
      <AnimationOnScroll
        animateIn="animate__slideInUp"
        className="mx-auto w-full max-w-[700px] bg-slate-200 p-8 lg:p-8 rounded-xl shadow-2xl my-10"
      >
        <h1 className="text-primary text-center text-3xl font-bold mb-8">
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <div className="mb-5">
            <label
              htmlFor="nama_lengkap"
              className="mb-3 block text-base font-medium text-black"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama_lengkap"
              id="nama_lengkap"
              placeholder="Masukkan Nama Lengkap"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="contoh@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md invalid:text-red-500 "
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-black"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Masukkan subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-black"
            >
              Pesan
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Masukkan Pesan"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            ></textarea>
          </div>
          <div>
            <button className="cursor-pointer text-base bg-primary px-8 py-2 rounded-xl text-white hover:shadow-lg hover:bg-teal-400 hover:opacity-90 transition-all duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
