import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import {
  LoginSection,
  ContenedorLogin,
  Formulario,
  SecctionForm,
  InputStyle,
  Submit,
  ErrorStyled,
  NavItem,
  NavHome,
} from "../Login/LoginStyled";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Este campo es requerido"),
  lastName: Yup.string().trim().required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Este campo es requerido"),
  password: Yup.string()
    .required("Contraseña es requerida")
    .min(8, "minimo 8 caracteres")
    .max(20, "maximo 20 caracteres"),
});

const SignIn = () => {
  return (
    <LoginSection>
      <ContenedorLogin>
        <h2>Crear cuenta</h2>

        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ touched, errors }) => (
            <Formulario>
              <SecctionForm>
                <label>Nombre:</label>

                <Field
                  as={InputStyle}
                  type="text"
                  name="name"
                  $error={errors.name && touched.name}
                />
                <ErrorMessage name="name" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>Apellido:</label>

                <Field
                  as={InputStyle}
                  type="text"
                  name="lastName"
                  $error={errors.lastName && touched.lastName}
                />
                <ErrorMessage name="lastName" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>email:</label>

                <Field
                  as={InputStyle}
                  type="text"
                  name="email"
                  $error={errors.email && touched.email}
                />
                <ErrorMessage name="email" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>Contraseña:</label>
                <Field
                  as={InputStyle}
                  type="text"
                  name="password"
                  $error={errors.password && touched.password}
                />
                <ErrorMessage name="password" component={ErrorStyled} />
              </SecctionForm>

              <Submit type="submit">Iniciar Sesión</Submit>
            </Formulario>
          )}
        </Formik>

        <NavItem to="/login">¿Ya tienes una cuenta?</NavItem>

        <NavHome to="/">Volver al home</NavHome>
      </ContenedorLogin>
    </LoginSection>
  );
};

export default SignIn;
