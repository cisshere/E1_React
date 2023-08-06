import React from "react";
import { HeroSection, Portada, PortadaContenedor, LinkHero } from "./HeroStyles";

const Hero = () => {
  const portadas = [
    { id: 1, img: "./assets/img/joyas/portadas/aros-portada.png", name: "Aros" },
    { id: 2, img: "./assets/img/joyas/portadas/collares-portada.png", name: "Collares" },
    { id: 3, img: "./assets/img/joyas/portadas/anillos-portada.png", name: "Anillos" },
  ];

  return (
      <HeroSection>
        
        {portadas.map((portada) => (
          <Portada key={portada.id} style= {{backgroundImage: `url(${portada.img})`}}>
            <PortadaContenedor >
              <LinkHero> {portada.name} </LinkHero>
            </PortadaContenedor>
          </Portada>
        ))}
        
      </HeroSection>
  );
};

export default Hero;