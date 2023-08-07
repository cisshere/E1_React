import React from "react";
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
} from "./NavbarStyles";
import { NavItem } from "./components/nav-item";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const navLinks = ["Inicio", "Productos", "Beneficios", "Contacto"];

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <MenuStyled>
          <ButtonMenu>
            <SlMenu />
          </ButtonMenu>
          <NavListPrincipal>
            {navLinks.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
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
