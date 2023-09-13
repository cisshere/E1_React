import React from "react";
import { Formik, useFormik } from "formik";

import {
  ContactSection,
  ContenedorContact,
  Formulario,
  SecctionForm,
  TextAreaStyle,
  InputStyle,
  Submit,
} from "./ContactoStyled";

const Contacto = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      asunto: "",
    },
    onSubmit: (values, {resetForm} ) =>{
      console.log(values)
      resetForm();
    },
  });

  <p>hola</p>
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <ContactSection>
      <ContenedorContact>
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Contacto</h2>
        <Formulario>

          <SecctionForm>
            <label>Nombre:</label>
            <InputStyle
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </SecctionForm>

          <SecctionForm>
            <label>Apellido:</label>
            <InputStyle
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </SecctionForm>

          <SecctionForm>
            <label>Email:</label>
            <InputStyle
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </SecctionForm>

          <SecctionForm>
            <label>Asunto:</label>
            <TextAreaStyle
              cols="30"
              rows="5"
              name="asunto"
              value={values.asunto}
              onChange={handleChange}
            />
          </SecctionForm>

          <Submit type="submit" onSubmit={handleSubmit} >Enviar</Submit>
        </Formulario>
      </ContenedorContact>
    </ContactSection>
  );
};

export default Contacto;
