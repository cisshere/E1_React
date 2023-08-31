import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  decrementar,
  incrementar,
  borrarProducto,
} from "../../redux/carrito/carritoActions";
import { CambiarCantidad, DatosProductCarrito, ProdImgCarrito, ProductoCarrito } from "./NavbarStyles";

 const CarritoContainer = (producto) => {

  const dispatchD = useDispatch();
  const { img, nombre, precio } = producto;

  return (
    <ProductoCarrito>
      <ProdImgCarrito src={img} />
      <DatosProductCarrito>
        <p style={{ width: "11rem" }}>{nombre} </p>
        <p> {precio}</p>
        <CambiarCantidad>
          <button style={{ display: "flex", alignItems: "center" }}>
            <GrFormSubtract onClick={() => dispatchD(decrementar(producto))} />
          </button>
          <p>{producto.cantidad}</p>
          <button style={{ display: "flex", alignItems: "center" }}>
            <GrFormAdd onClick={() => dispatchD(incrementar(producto))} />
          </button>
        </CambiarCantidad>
      </DatosProductCarrito>
      <div>
        <button>
          <BsFillTrashFill
            onClick={() => dispatchD(borrarProducto(producto))}
          />
        </button>
      </div>
    </ProductoCarrito>
  );
};

export default CarritoContainer;
