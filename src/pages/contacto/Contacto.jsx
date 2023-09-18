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
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Este campo es requerido"),
  lastName: Yup.string().trim().required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Este campo es requerido"),
  asunto: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
});

const Contacto = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      asunto: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <ContactSection>
      <ContenedorContact>
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Contacto</h2>
        <Formulario onSubmit={handleSubmit}>
          <SecctionForm error={errors.name && touched.name}>
            <label>Nombre:</label>
            <InputStyle
              type="text"
              name="name"
              {...getFieldProps("name")}
            />
            {errors.name && touched.name && <span>Este campo es obligatorio</span>}
          </SecctionForm>

          <SecctionForm>
            <label>Apellido:</label>
            <InputStyle
              type="text"
              name="lastName"
              {...getFieldProps("lastName")}
            />
          </SecctionForm>

          <SecctionForm>
            <label>Email:</label>
            <InputStyle
              type="email"
              name="email"
              {...getFieldProps("email")}
            />
          </SecctionForm>

          <SecctionForm>
            <label>Asunto:</label>
            <TextAreaStyle
              cols="30"
              rows="5"
              name="asunto"
              {...getFieldProps("asunto")}
            />
          </SecctionForm>

          <Submit type="submit">Enviar</Submit>
        </Formulario>
      </ContenedorContact>
    </ContactSection>
  );
};

export default Contacto;
