import React from "react";
import { ContactSection, ContenedorContact,Formulario, SecctionForm, TextAreaStyle, InputStyle, Submit } from "./ContactoStyled";

const Contacto = () => {
  return (
    <ContactSection>
      <ContenedorContact>
        <h2 style={{textAlign: "center", marginBottom: "3rem" }} >Contacto</h2>
        <Formulario>

          <SecctionForm>
            <label>Nombre:</label>
            <InputStyle type="text" name="nombre" placeholder="Ingrese su nombre"/>
          </SecctionForm>

          <SecctionForm>
            <label>Apellido:</label>
            <InputStyle type="text" name="apellido" placeholder="Ingrese su apellido"/>
          </SecctionForm>

          <SecctionForm>
            <label>Email:</label>
            <InputStyle type="email" name="email" placeholder="Ingrese su email" />
          </SecctionForm>

          <SecctionForm>
            <label>Asunto:</label>
            <TextAreaStyle cols="30" rows="5" name="asunto" />
          </SecctionForm>

          <Submit type="submit">Enviar</Submit>

        </Formulario>
      </ContenedorContact>
    </ContactSection>
  );
};

export default Contacto;
