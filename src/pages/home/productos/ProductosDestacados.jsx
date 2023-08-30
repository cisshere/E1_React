import React from "react";
import Slider from "react-slick";
import productList from "../../../datos/DatoProductos";
import CardProducto from "../../products/CardContainer";

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
    </section>
  );
};

export default ProductListSeccion;
