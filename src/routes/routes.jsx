import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Contacto from "../pages/contacto/Contacto";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path= '/' element={<Home />} />
          <Route path= 'contacto' element={<Contacto />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
