import React from "react";
import { CTA, Companies, Customers, FQA, Hero, Price } from "./components/sections";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <FQA />
      <Customers />
      <Price />
      <CTA />
    </>
  );
};

export default Home;
