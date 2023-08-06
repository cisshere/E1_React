import React from "react";
import {
  ImagenCarousel,
  DescripcionProducto,
  ProductoContenedor,
  CarouselStyled,
} from "./ProductosDestacadosStyles";

const ProductListSeccion = () => {
  let ProductList = [
    {
      id: 1,
      img: "./assets/img/joyas/anillo-corazon.png",
      alt: "anillo-corazon",
      nombre: "Anillo corazon",
      precio: 8000,
      metal: "plata",
      categoria: "anillo",
      destacado: true,
    },
    {
      id: 2,
      img: "./assets/img/joyas/anillo-princess.png",
      alt: "anillo-princess",
      nombre: "Anillo princess",
      precio: 15000,
      metal: "chapado en oro",
      categoria: "anillo",
      destacado: true,
    },
    {
      id: 3,
      img: "./assets/img/joyas/collar-mariposa.png",
      alt: "collar-mariposa",
      nombre: "Collar mariposa",
      precio: 13000,
      metal: "chapado en otro",
      categoria: "collar",
      destacado: false,
    },
    {
      id: 4,
      img: "./assets/img/joyas/anillo-mariposa.png",
      alt: "anillo-mariposa",
      nombre: "Anillo mariposa",
      precio: 15000,
      metal: "chapado en oro",
      categoria: "anillo",
      destacado: false,
    },
    {
      id: 5,
      img: "./assets/img/joyas/collar-barbie.png",
      alt: "collar-barbie",
      nombre: "Collar barbie",
      precio: 20000,
      metal: "plata",
      categoria: "collar",
      destacado: true,
    },
    {
      id: 6,
      img: "./assets/img/joyas/aro-conejo.png",
      alt: "aro-conejo",
      nombre: "Aros conejito",
      precio: 22000,
      metal: "acero",
      categoria: "aros",
      destacado: true,
    },
    {
      id: 8,
      img: "./assets/img/joyas/set-anillos.png",
      alt: "set-anillos",
      nombre: "Set de anillos",
      precio: 3100,
      metal: "metal",
      categoria: "anillo",
      destacado: true,
    },
    {
      id: 8,
      img: "./assets/img/joyas/collar-cristal.png",
      alt: "collar-cristal",
      nombre: "Collar cristal",
      precio: 3100,
      metal: "metal",
      categoria: "collar",
      destacado: false,
    },
    {
      id: 9,
      img: "./assets/img/joyas/aro-perla.png",
      alt: "aro-perla",
      nombre: "Aro perla",
      precio: 3000,
      metal: "plata",
      categoria: "aros",
      destacado: true,
    },
  ];

  const productosDestacados = ProductList.filter(
    (producto) => producto.destacado
  );

  return (
    <div className="contenedorCarousel">
      <h1 style={{ textAlign: "center" }}>Productos Destacados</h1>
      <CarouselStyled slidesToShow="2" autoplay="true">
        {productosDestacados.map((producto) => (
          <ProductoContenedor key={producto.id}>
            <ImagenCarousel src={producto.img} alt={producto.nombre} />
            <DescripcionProducto> {producto.nombre} </DescripcionProducto>
            <DescripcionProducto> $ {producto.precio} </DescripcionProducto>
            <DescripcionProducto> {producto.metal} </DescripcionProducto>
          </ProductoContenedor>
        ))}
      </CarouselStyled>
    </div>
  );
};

export default ProductListSeccion;
