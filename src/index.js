import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' , date: '', afect: '', cap: ''}}
      validationSchema={Yup.object({
        firstName: Yup.string().max(40, 'Nombre debe ser de 40 caracteres o menos').required('Este campo es requerido'),
        lastName: Yup.string().max(20, 'Apellidos deben ser de 40 caracteres o menos').required('Este campo es requerido'),
        email: Yup.string().email('Correo inválido').required('Este campo es requerido'),
        date: Yup.date().min("1920-01-01", "Favor de ingresar una fecha más reciente").max("2002-01-01", "Necesitas ser mayor de edad").required('Este campo es requerido'),
        afect: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido'),
        cap: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">Nombre:</label><br/>
        <Field name="firstName" type="text" class="ing" />
        <p class="error"><ErrorMessage name="firstName" /></p>
        <label htmlFor="lastName">Apellido:</label><br/>
        <Field name="lastName" type="text" class="ing" />
        <p class="error"><ErrorMessage name="lastName" class="error" /></p>
        <label htmlFor="email" >Correo:</label><br/>
        <Field name="email" type="email" class="ing" />
        <p class="error"><ErrorMessage name="email" class="error" /></p>
       	<label htmlFor="date">Fecha:</label><br/>
       	<Field name="date" type="date" />
       	<p class="error"><ErrorMessage name="date" class="error" /></p>
       	<label htmlFor="afect">¿Qué tanto te afectó el desastre?:</label><br/>
       	<Field name="afect" as="textarea" />
       	<p class="error"><ErrorMessage name="afect" class="error" /></p>
       	<label htmlFor="cap">¿Cuáles son tus capacidades?:</label><br/>
       	<Field name="cap" as="textarea" />
       	<p class="error"><ErrorMessage name="cap" class="error" /></p>
       	<button type="submit">Subir</button>
      </Form>
    </Formik>
  );
};

ReactDOM.render(
  <SignupForm />,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
