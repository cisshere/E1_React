import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { MenuDespegable } from "../navbar/MenuContext";

const ContentContainerStyled = styled.div``;

function Layout({ children }) {
  return (
    <>
      <MenuDespegable>
        <Navbar />
      </MenuDespegable>
      <ContentContainerStyled>{children}</ContentContainerStyled>
    </>
  );
}

export default Layout;
