import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { MenuDespegable } from "../navbar/MenuContext";
import FooterSeccion from "../footer/Footer";

const ContainerStyle = styled.div`
`;

function Layout({ children }) {
  return (
    <>
      <MenuDespegable>
        <Navbar />
      </MenuDespegable>
      <ContainerStyle>{children}</ContainerStyle>
      <FooterSeccion />
    </>
  );
}

export default Layout;
