import React from "react";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import StatsSection from "./Starts";
import Services from "./Services";

function Home() {
  return (
    <>
      <NavigationBar />
      <StatsSection />
      <Services />
      <HeroSection />

      <Footer />
    </>
  );
}

export default Home;
