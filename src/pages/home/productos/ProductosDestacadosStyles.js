import styled from "styled-components";

export const ImagenCarousel = styled.img`
  width: 70%;
  margin: auto;
`;

export const DescripcionProducto = styled.p`
  text-align: center;
  margin: 6px;
  padding: 0;
`;

export const DescripcionProductoNombre = styled(DescripcionProducto)`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ProductoContenedor = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.3rem;
  align-items: center;
`;

export const BtnComprarProducto = styled.button`
  background-color: #f7d2f5;
  border-radius: 0.3rem;
  padding: 0.3rem 1.5rem;
  letter-spacing: 1px;
  margin: 0.5rem 0;
  cursor: pointer;

  @media (max-width: 350px) {
    margin-bottom: 2rem;
  }
`;
