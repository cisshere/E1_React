import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCarrito: [],
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    agregarProducto: (state, action) => {
      state.itemsCarrito.push(action.payload);
    },
    borrarCarrito: (state) => {
        state = initialState
    },
  },
});

export default carritoSlice.reducer;
