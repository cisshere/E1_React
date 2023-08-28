import {configureStore} from "@reduxjs/toolkit"

import carritoReducer from "./carrito/carritoSlide"

const store = configureStore({
    reducer: {
        carrito: carritoReducer,
    }
});

export default store;