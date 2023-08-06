import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
    </>
  );
}

export default App;