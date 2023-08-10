import React from "react";
import {
  HeroSection,
  ContenedorHero,
  ImagenHero,
  ContenedorDescripcion,
  Descripcion,
} from "./HeroStyles";
import { FiPackage } from "react-icons/fi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

const Hero = () => {
  return (
    <HeroSection>
      <ContenedorHero>
        <ImagenHero src="./assets/img/joyas/portadas/anillos-portada.png" />

        <ContenedorDescripcion>
          <Descripcion>
            <FiPackage />
            <p>Envios a todo el pais!</p>
          </Descripcion>

          <Descripcion>
            <BsFillCreditCard2BackFill />
            <p>Aceptamos todas las tarjetas</p>
          </Descripcion>

          <Descripcion>
            <MdOutlineSecurityUpdateGood />
            <p>Tu compra 100% asegurada</p>
          </Descripcion>
        </ContenedorDescripcion>
      </ContenedorHero>
    </HeroSection>
  );
};

export default Hero;
