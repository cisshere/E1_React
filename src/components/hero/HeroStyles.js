import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 6rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Portada = styled.div`
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 90%;
  margin: 1rem;
  background-repeat: no-repeat;

  @media(max-width: 800px){
    background-size: contain;
  }
`;

export const PortadaContenedor = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
`;

export const LinkHero = styled.a`
  padding: 1rem;
  background-color: #c38fb4;
  border-radius: 0.5rem;

  &:hover {
    transition-duration: 500ms;
    padding: 1.3rem 1.5rem;
    background-color: #8f587f;
    color: white;
    cursor: pointer;
  }
`;
