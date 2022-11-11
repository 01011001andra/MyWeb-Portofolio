import React from "react";
import About from "./components/About";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Card2 />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
