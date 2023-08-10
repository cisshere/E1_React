import styled from "styled-components";

export const HeaderContainerStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const NavbarContainerStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #dcd0e3;
  padding: 0.3rem 1rem;

  @media (min-width: 1368px) {
    justify-content: center;
    gap: 8rem;
  }
`;

export const MenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavListPrincipal = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;

  @media (max-width: 940px) {
    display: none;

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 79%;
      left: 0px;
      background-color: #dcd0e3;
      width: 13rem;
      z-index: 1;
      align-items: center;
      gap: 3rem;
      padding: 1rem;
    }
  }
`;

export const LogoMarca = styled.img`
  height: 4.3rem;
  width: 10rem;
  margin-right: 20%;

  @media (min-width: 1368px) {
    margin: 0;
  }

  @media (max-width: 940px) {
    margin: 0;
  }
`;

export const BtnNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LinkContainerInicioSesion = styled.a`
  display: flex;
  font-size: 2.2rem;
`;

export const ButtonCart = styled.button`
  display: flex;
  font-size: 1.7rem;
  background-color: #b78dcd1c;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ButtonMenu = styled(ButtonCart)`
  border-radius: 0;

  @media (min-width: 941px) {
    display: none;
  }
`;
