import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { MenuDespegable } from "../navbar/MenuContext";

const ContainerStyle = styled.div`
  padding-top: 6rem;
`;

function Layout({ children }) {
  return (
    <>
      <MenuDespegable>
        <Navbar />
      </MenuDespegable>
      <ContainerStyle>{children}</ContainerStyle>
    </>
  );
}

export default Layout;
