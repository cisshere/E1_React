import styled from "styled-components";
import Carousel from "nuka-carousel";

export const ImagenCarousel = styled.img`
  width: 15rem;
  height: 15rem;
  display: flex;
`;

export const DescripcionProducto = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const ProductoContenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.3rem;
  gap: 0.5rem;
`;

export const CarouselStyled = styled(Carousel)`
  margin: auto;
  background-color: white;
  max-width: 50rem;
  width: 100%;
  box-sizing: border-box;
`;
