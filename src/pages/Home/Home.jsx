import React from "react";
import LandingPage from "../Landing page/LandingPage";
import AboutUs from "../AboutUs/AboutUs";
import Categories from "../Categories/Categories";
import Testimonial from "../Testimonial/Testimonial";

export const Home = () => {
  return (
    <>
      <LandingPage/>
      <AboutUs />
      <Categories />
      <Testimonial />
    </>
  );
};
