import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Contacto from "../pages/contacto/Contacto";
import ProductosSecction from "../pages/products/Productos";
import Beneficios from "../pages/beneficios/Beneficios";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductosSecction />} />
          <Route path="beneficios" element={<Beneficios />} />
          <Route path="contacto" element={<Contacto />} />

          <Route path="*" element={<h2>Error!</h2>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
