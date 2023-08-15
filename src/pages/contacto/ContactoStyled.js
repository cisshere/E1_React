import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 6rem;

  @media (min-width: 1368px) {
    margin: 0 15%;
  }
`;

export const ContenedorContact = styled.div`
  background-color: #d1bad0;
  border-radius: 2rem;
  padding: 2rem 5rem;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SecctionForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAreaStyle = styled.textarea`
  resize: none;
  padding: 0.9rem 0.9rem 2rem 0.9rem;
  font-size: 1.2rem;
`;
