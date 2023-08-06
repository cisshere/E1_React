import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ProductListSeccion from "./components/productos/ProductosDestacados";
import FooterSeccion from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ProductListSeccion/>
      <FooterSeccion/>
      <h1>hola</h1>
    </>
  );
}

export default App;