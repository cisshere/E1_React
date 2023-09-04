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
import { useState } from "react";

const ProductosSecction = () => {
  const [Categories, setCategories] = useState("Todos");

  const productosFiltrados = productList.filter((producto) => {
    if (Categories === "Todos") {
      return true;
    } else {
      return producto.categoria === Categories;
    }
  });

  return (
    <ProductsSection>
      <TituloProductos>PRODUCTOS</TituloProductos>
      <BtnLista>
        <BtnCategoria onClick={() => setCategories("Todos")}>
          Todos
        </BtnCategoria>
        <BtnCategoria onClick={() => setCategories("aros")}>Aros</BtnCategoria>
        <BtnCategoria onClick={() => setCategories("collar")}>
          Collares
        </BtnCategoria>
        <BtnCategoria onClick={() => setCategories("anillo")}>
          Anillos
        </BtnCategoria>
      </BtnLista>
      <ProductosContainer>
        {productosFiltrados.map((producto) => (
          <CardProducto {...producto} key={producto.id} />
        ))}
      </ProductosContainer>
    </ProductsSection>
  );
};

export default ProductosSecction;
