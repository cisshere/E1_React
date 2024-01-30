import styled from "styled-components";
import { Form } from "formik";

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`;

export const ContenedorLogin = styled.div`
border: 0.2rem solid #afafaf;
  background-color: #dcd0e3;
  background-position: center;
  padding: 2rem 5rem;
  display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

  @media (max-width: 475px) {
    padding: 1rem 0;
    width: 100%;
  }
`;

export const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SecctionForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const InputStyle = styled.input`
  text-align: center;
  font-size: 1.125rem;
  color: black;
  padding: 0.25rem 2.3rem;
  border: none;
  border: 0.2rem solid ${(props) => (props.$error ? "red" : "#afafaf")};

  @media (max-width: 510px) {
    font-size: 1rem;
  }
`;

export const Submit = styled.button`
  background-color: #dcd0e3;
  cursor: pointer;
  padding: 0.4rem 1rem;
`;

export const ErrorStyled = styled.span`
  color: red;
`;