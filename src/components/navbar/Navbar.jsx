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
  NavItem
} from "./NavbarStyles";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Context } from "./MenuContext";

const Navbar = () => {

  const { state, dispatch } = useContext(Context);

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <MenuStyled>
          <ButtonMenu onClick={() => dispatch({ type: "toggle_menu" })}>
            <SlMenu />
          </ButtonMenu>
          <NavListPrincipal className={state.isMenuOpen ? "open" : ""}>
             
             <NavItem to='/' > Home </NavItem>
             <NavItem> Productos </NavItem>
             <NavItem> Beneficios </NavItem>
             <NavItem to='Contacto' > Contacto </NavItem>

          </NavListPrincipal>
        </MenuStyled>

        <LogoMarca src="./assets/img/logo.png" alt="logo" />

        <BtnNavbar>
          <LinkContainerInicioSesion href="#">
            <BiSolidUserRectangle />
          </LinkContainerInicioSesion>
          <ButtonCart>
            <FaShoppingCart />
          </ButtonCart>
        </BtnNavbar>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Navbar;
