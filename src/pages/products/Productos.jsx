import React from "react";
import {
  ProductsSection,
  TituloProductos,
  BtnLista,
  BtnCategoria,
  ProductosContainer,
  Card,
  ImgCart,
  BtnComprar,
} from "./ProductosStyles";
import productList from "../../datos/DatoProductos";

const ProductosSecction = () => {
  return (
    <ProductsSection>
      <TituloProductos>PRODUCTOS</TituloProductos>
      <BtnLista>
        <BtnCategoria>Todos</BtnCategoria>
        <BtnCategoria>Aros</BtnCategoria>
        <BtnCategoria>Collares</BtnCategoria>
        <BtnCategoria>Anillos</BtnCategoria>
      </BtnLista>
      <ProductosContainer>
        {productList.map((producto, key) => (
          <Card key={key}>
            <ImgCart src={producto.img} alt={producto.alt} />
            <p style={{fontWeight: "bold"}}>{producto.nombre}</p>
            <p>${producto.precio}</p>
            <p>{producto.metal}</p>
            <BtnComprar>Comprar</BtnComprar>
          </Card>
        ))}
      </ProductosContainer>
    </ProductsSection>
  );
};

export default ProductosSecction;
