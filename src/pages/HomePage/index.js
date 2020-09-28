import React from "react";
import { Pricing, HeroSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
function HomePage() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default HomePage;
