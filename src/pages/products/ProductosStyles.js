import styled from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
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
`;

export const BtnCategoria = styled.button`
  padding: 0.4rem;
  background-color: #f3b2ff;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const ProductosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.938rem;
  margin: 0 6.5rem;
  max-width: 1367px;
`;

export const Cart = styled.div`
  flex-direction: column;
  display: flex;
  text-align: center;
  gap: 0.313rem;
  margin: 1rem;
`;

export const ImgCart = styled.img`
  width: 12rem;
  height: 12rem;
  margin: 0.75rem;
  border-radius: 0.938rem;
  object-fit: cover;
  cursor: pointer;
`;

export const BtnComprar = styled.button`
  background-color: #f7d2f5;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 0.25rem;
  padding: 0.25rem 1.438rem;
  letter-spacing: 1px;
  margin-top: 0.3rem;
  cursor: pointer;
`;
