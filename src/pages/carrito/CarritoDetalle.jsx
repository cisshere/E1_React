import React from "react";
import { selectItemsCarrito } from "../../redux/carrito/carritoSelectors";
import CarritoContainer from "../../components/navbar/CarritoContenedor";
import { CarritoSeccion } from "./CarritoDetalleStyle";

const CarritoDetalle = () => {

  const itemsCarrito = selectItemsCarrito();

  return (
    <>
      <CarritoSeccion>
        {itemsCarrito.map((producto) => (
          <CarritoContainer {...producto} key={producto.id} />
        ))}
      </CarritoSeccion>
    </>
  );
};

export default CarritoDetalle;
