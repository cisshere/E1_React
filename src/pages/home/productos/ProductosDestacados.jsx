import React from "react";
import Slider from "react-slick";
import productList from "../../../datos/DatoProductos";
import CardProducto from "../../products/CardContainer";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const VerMasProductos = styled(NavLink)`
  background-color: #f7d2f5;
  padding: 0.6rem;
  letter-spacing: 1px;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.5s;
  border: 2px solid;

  &:hover {
    padding: 1rem;
    background-color: #9d4698;
  }
`;

const ProductListSeccion = () => {
  const configuracion = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    arrows: true,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productosDestacados = productList.filter(
    (producto) => producto.destacado
  );

  return (
    <section className="contenedorCarousel">
      <h1 style={{ textAlign: "center" }}>Productos Destacados</h1>
      <Slider {...configuracion}>
        {productosDestacados.map((producto) => (
          <CardProducto {...producto} key={producto.id} />
        ))}
      </Slider>
      <div style={{ textAlign: "center", marginTop: "4.5rem", height: "2rem" }}>
        <VerMasProductos to="productos">Ver + productos</VerMasProductos>
      </div>
    </section>
  );
};

export default ProductListSeccion;
