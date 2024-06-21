import React from "react";
import { CTA, Companies, Customers, FQA, Hero } from "./components";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <FQA />
      <Customers />
      <CTA />
    </>
  );
};

export default Home;
