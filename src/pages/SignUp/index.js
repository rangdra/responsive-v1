import React from "react";
import { HeroSection } from "../../components";
import { homeObjThree } from "./Data";
function SignUp() {
  return (
    <>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
