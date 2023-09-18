import styled from "styled-components";

export const ProductoCarrito = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid;
  padding: 0.6rem;
  margin: 0.3rem;
`;

export const ProdImgCarrito = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const DatosProductCarrito = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 10rem;
`;

export const CambiarCantidad = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const ButtonCart = styled.button`
  background-color: #f7d2f5;
  padding: 0.3rem 0rem;
  letter-spacing: 1px;
  margin: 0 4rem;
  cursor: pointer;
`;

export const ButtonCambiarCantidad = styled.button`
  display: flex;
  align-items: center;
`;

export const BelowCarrito = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
