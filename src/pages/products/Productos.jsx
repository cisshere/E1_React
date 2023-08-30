import React from "react";
import {
  ProductsSection,
  TituloProductos,
  BtnLista,
  BtnCategoria,
  ProductosContainer,
} from "./ProductosStyles";
import productList from "../../datos/DatoProductos";
import CardProducto from "./CardContainer";

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
        {productList.map((producto) => (
          <CardProducto {...producto} key={producto.id} />
        ))}
      </ProductosContainer>
    </ProductsSection>
  );
};

export default ProductosSecction;
