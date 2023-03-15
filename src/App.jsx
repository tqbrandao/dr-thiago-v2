import "./App.css";
import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Treatment from "./components/Treatment";
import Map from "./components/Map";
import Testimonials from "./components/Testimonials";
import Clinic from "./components/Clinic";

function App() {
  const [isMobile, setMobile] = useState(window.innerWidth < 544);

  const updateMedia = () => {
    setMobile(window.innerWidth < 544);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Layout>
      <main>
        <Hero />
        <MyWork />
        <About />
        <Clinic />
        <Treatment />
        {isMobile && <Testimonials />}
        <Map />
      </main>
    </Layout>
  );
}

export default App;
