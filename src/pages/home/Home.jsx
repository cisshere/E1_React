import React from "react";
import Hero from "./hero/Hero";
import ProductosDestacados from "./productos/ProductosDestacados";
import FooterSeccion from "./footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductosDestacados />
      <FooterSeccion />
    </>
  );
};

export default Home;
