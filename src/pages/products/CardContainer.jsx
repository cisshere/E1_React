import { useDispatch } from "react-redux";
import { agregarProducto } from "../../redux/carrito/carritoActions";
import {
  ProductoContenedor,
  BtnComprarProducto,
  ImagenProducto,
  DescripcionProducto,
  DescripcionProductoNombre,
} from "../products/ProductosStyles";

const CardProducto = (producto) => {
  const dispatch = useDispatch();
  const { img, alt, nombre, precio, metal } = producto;

  return (
    <ProductoContenedor>
      <ImagenProducto src={img} alt={alt} />
      <DescripcionProductoNombre>{nombre}</DescripcionProductoNombre>
      <DescripcionProducto> $ {precio} </DescripcionProducto>
      <DescripcionProducto> {metal} </DescripcionProducto>
      <BtnComprarProducto onClick={() => dispatch(agregarProducto(producto))}>
        Comprar
      </BtnComprarProducto>
    </ProductoContenedor>
  );
};

export default CardProducto;
