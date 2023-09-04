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
  const [categories, SetCategories] = useState("Todos");

  const categoriaFiltrada = productList.filter((producto) => {
    if (categories == "Todos") {
      return true;
    } else {
      return producto.categoria === categories;
    }
  });

  return (
    <ProductsSection>
      <TituloProductos>PRODUCTOS</TituloProductos>
      <BtnLista>
        <BtnCategoria onClick={SetCategories("Todos")}>Todos</BtnCategoria>
        <BtnCategoria onClick={SetCategories("Aros")}>Aros</BtnCategoria>
        <BtnCategoria onClick={SetCategories("Collares")}>
          Collares
        </BtnCategoria>
        <BtnCategoria onClick={SetCategories("Anillos")}>Anillos</BtnCategoria>
      </BtnLista>
      <ProductosContainer>
        {categoriaFiltrada.map((producto) => (
          <CardProducto {...producto} key={producto.id} />
        ))}
      </ProductosContainer>
    </ProductsSection>
  );
};

export default ProductosSecction;
