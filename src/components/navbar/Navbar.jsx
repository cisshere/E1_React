import React from "react";
import { useContext } from "react";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  MenuStyled,
  NavListPrincipal,
  BtnNavbar,
  LinkContainerInicioSesion,
  ButtonCart,
  ButtonMenu,
  LogoMarca,
  NavItem,
  Carrito,
} from "./NavbarStyles";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Context } from "./MenuContext";
import { selectItemsCarrito } from '../../redux/carrito/carritoSelectors'

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const itemsCarrito = selectItemsCarrito();

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
          <ButtonCart onClick={() => dispatch({ type: "toggle_cart" })}>
            <FaShoppingCart />
          </ButtonCart>

          <Carrito className={state.isCartOpen ? "openCart" : ""}>
            <ul>
              {itemsCarrito.map((producto) => (
                <li key={producto.id}>
                  <p>{producto.nombre} </p>
                  <p> {producto.precio}</p>
                </li>
              ))}
            </ul>

            {itemsCarrito.length === 0 && <p>No hay productos en el carrito</p>}
          </Carrito>
        </BtnNavbar>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Navbar;
