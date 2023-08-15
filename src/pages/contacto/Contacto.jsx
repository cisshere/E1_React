import React from "react";
import { ContactSection, ContenedorContact,Formulario, SecctionForm, TextAreaStyle } from "./ContactoStyled";

const Contacto = () => {
  return (
    <ContactSection>
      <ContenedorContact>
        <h2 style={{textAlign: "center", marginBottom: "3rem" }} >Contacto</h2>
        <Formulario>

          <SecctionForm>
            <label style={{fontWeight: "bold" }}>Nombre:</label>
            <input type="text" name="nombre" style={{fontSize: "1.3rem"}} />
          </SecctionForm>

          <SecctionForm>
            <label style={{fontWeight: "bold" }}>Apellido:</label>
            <input type="text" name="apellido" style={{fontSize: "1.3rem"}} />
          </SecctionForm>

          <SecctionForm>
            <label style={{fontWeight: "bold" }}>Email:</label>
            <input type="email" name="email" style={{fontSize: "1.3rem"}} />
          </SecctionForm>

          <SecctionForm>
            <label style={{fontWeight: "bold" }}>Asunto:</label>
            <TextAreaStyle name="asunto" />
          </SecctionForm>

          <button type="submit">Submit</button>

        </Formulario>
      </ContenedorContact>
    </ContactSection>
  );
};

export default Contacto;
