import React from "react";
import {
  ImagenCarousel,
  DescripcionProducto,
  ProductoContenedor,
  DescripcionProductoNombre,
  BtnComprarProducto,
} from "./ProductosDestacadosStyles";
import Slider from "react-slick";
import productList from "./Dato";

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
          <ProductoContenedor key={producto.id}>
            <ImagenCarousel src={producto.img} alt={producto.nombre} />
            <DescripcionProductoNombre>
              {producto.nombre}
            </DescripcionProductoNombre>
            <DescripcionProducto> $ {producto.precio} </DescripcionProducto>
            <DescripcionProducto> {producto.metal} </DescripcionProducto>
            <BtnComprarProducto>Comprar</BtnComprarProducto>
          </ProductoContenedor>
        ))}
      </Slider>
    </section>
  );
};

export default ProductListSeccion;
