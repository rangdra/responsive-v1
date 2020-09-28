import React from "react";
import { Pricing, HeroSection } from "../../components";
import { homeObjOne } from "./Data";
function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;
