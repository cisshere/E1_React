import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCarrito: [],
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,

  reducers: {
    agregarProducto: (state, action) => {
      const productoAComprar = state.itemsCarrito.find(
        (producto) => producto.id === action.payload.id
      );

      if (productoAComprar) {
        productoAComprar.cantidad += 1;
      } else {
        state.itemsCarrito.push({ ...action.payload, cantidad: 1 });
      }
    },
    decrementar: (state, action) => {
      const productoAComprar = state.itemsCarrito.find(
        (producto) => producto.id === action.payload.id
      );

      if (productoAComprar.cantidad > 0) {
        productoAComprar.cantidad -= 1;
      }
    },
    borrarCarrito: (state) => {
      state = initialState;
    },
  },
});

export default carritoSlice.reducer;
