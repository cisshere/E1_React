import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  gap: 4rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (min-width: 1368px) {
    margin: 0 15%;
  }
`;

export const ContenedorContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #d1bad0;
  border-radius: 2rem;
  padding: 2rem;

  @media(max-width:420px){
    padding: 2rem 0;
  }

  @media(max-width:710px){
    flex-direction: column;
  }
`;