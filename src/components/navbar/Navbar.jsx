import React from "react";
import { useContext } from "react";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  MenuStyled,
  NavListPrincipal,
  BtnNavbar,
  LinkContainerInicioSesion,
  ButtonCartLogo,
  ButtonMenu,
  LogoMarca,
  NavItem,
  Carrito,
  ContenedorCarrito,
} from "./NavbarStyles";
import { ButtonCart, BelowCarrito } from "./CarritoStyles";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Context } from "./MenuContext";
import { selectItemsCarrito } from "../../redux/carrito/carritoSelectors";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { borrarCarrito } from "../../redux/carrito/carritoActions";
import CarritoContainer from "./CarritoContenedor";
import { EjemploModalReact } from "./modal/ModalReact";

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const itemsCarrito = selectItemsCarrito();
  const dispatchRedux = useDispatch();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <MenuStyled>
          <ButtonMenu onClick={() => dispatch({ type: "toggle_menu" })}>
            <SlMenu />
          </ButtonMenu>
          <NavListPrincipal className={state.isMenuOpen ? "openMenu" : ""}>
            <NavItem to="/"> Home </NavItem>
            <NavItem to="productos"> Productos </NavItem>
            <NavItem to="beneficios"> Beneficios </NavItem>
            <NavItem to="contacto"> Contacto </NavItem>
          </NavListPrincipal>
        </MenuStyled>

        <LogoMarca src="./assets/img/logo.png" alt="logo" />

        <BtnNavbar>
          <LinkContainerInicioSesion href="#">
            <BiSolidUserRectangle />
          </LinkContainerInicioSesion>
          <ButtonCartLogo onClick={() => dispatch({ type: "toggle_cart" })}>
            <FaShoppingCart />
          </ButtonCartLogo>

          <Carrito className={state.isCartOpen ? "openCart" : ""}>
            <p>
            <EjemploModalReact
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
              />
              
              <BsCart4 />
              Mi carrito
            </p>
            <ContenedorCarrito>
              {itemsCarrito.map((producto) => (
                <CarritoContainer {...producto} key={producto.id} />
              ))}
            </ContenedorCarrito>

            {itemsCarrito.length !== 0 && (
              <BelowCarrito>
                <p style={{ border: "1px solid", margin: "0 4rem" }}>Total $</p>
                <ButtonCart>Comprar</ButtonCart>
                <ButtonCart onClick={openModal}>Borrar todo</ButtonCart>
              </BelowCarrito>
            )}

            {itemsCarrito.length === 0 && <p>No hay productos en el carrito</p>}
          </Carrito>
        </BtnNavbar>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Navbar;
