import React from "react";
import { HeroSection } from "../../components";
import { homeObjFour } from "./Data";
function Products() {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
