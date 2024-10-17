import React from "react";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import StatsSection from "./Starts";

function Home() {
  return (
    <>
      <NavigationBar />
      <StatsSection />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
