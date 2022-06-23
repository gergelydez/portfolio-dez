import React from "react";
import Summary from "./summary";
import Technologies from "./technologies";

function About() {
  return (
    <section className=" max-w-screen-2xl mx-auto p-8 my-6  glassmorphism">
      <Summary />
      <Technologies />
    </section>
  );
}

export default About;
