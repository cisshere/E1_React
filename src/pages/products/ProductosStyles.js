import styled from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;
`;

export const TituloProductos = styled.h2`
  text-align: center;
  font-size: 1.75rem;
`;

export const BtnLista = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const BtnCategoria = styled.button`
  font-weight: bold;
  background-color: #f7d2f5;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e79ed8;
  }
`;

export const ProductosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 0 2rem;
  max-width: 1295px;
`;

export const Card = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  gap: 0.3rem;
  margin: 1rem;
`;

export const ImgCart = styled.img`
  width: 12rem;
  height: 12rem;
  margin: 0.7rem;
  object-fit: cover;
  cursor: pointer;
`;

export const BtnComprar = styled.button`
  background-color: #f7d2f5;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.4rem 0rem;
  letter-spacing: 1px;
  margin-top: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: #e79ed8;
  }
`;
