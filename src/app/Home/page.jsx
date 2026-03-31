import React from "react";
import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import JoinUs from "./components/JoinUs";
import CareSection from "./components/CareSection";
import Partners from "./components/Partners";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <MissionSection />
      <AboutSection />
      <CareSection />
      <StatsSection />
      <Partners />
      <JoinUs />
    </div>
  );
}
