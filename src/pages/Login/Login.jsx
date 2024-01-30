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
} from "./LoginStyled";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Este campo es requerido"),
  contraseña: Yup.string().trim().required("Este campo es requerido"),
});

const Login = () => {
  return (
    <LoginSection>
      <ContenedorLogin>
        <h2>Iniciar Sesión</h2>

        <Formik
          initialValues={{
            name: "",
            contraseña: "",
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
                <label>Contraseña:</label>
                <Field
                  as={InputStyle}
                  type="text"
                  name="contraseña"
                  $error={errors.contraseña && touched.contraseña}
                />
                <ErrorMessage name="contraseña" component={ErrorStyled} />
              </SecctionForm>

              <Submit type="submit">Iniciar Sesión</Submit>
            </Formulario>
          )}
        </Formik> 

        <a>¿Olvidaste tu contraseña?</a>

        <a>¿No tienes cuenta? Registrate</a>
      </ContenedorLogin>
    </LoginSection>
  );
};

export default Login;
