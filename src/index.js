import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	cuadros: {
		padding: '0px 0px 30px 0px',
		width: '40%',
	}
});


const SignupForm = () => {
	const classes = useStyles();
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' , date: '', afect: '', cap: ''}}
      validationSchema={Yup.object({
        firstName: Yup.string().max(40, 'Nombre debe ser de 40 caracteres o menos').required('Este campo es requerido'),
        lastName: Yup.string().max(20, 'Apellidos deben ser de 40 caracteres o menos').required('Este campo es requerido'),
        email: Yup.string().email('Correo inválido').required('Este campo es requerido'),
        date: Yup.date().min('1920-01-01', 'Favor de ingresar una fecha más reciente').max('2002-01-01', 'Necesitas ser mayor de edad').required('Este campo es requerido'),
        afect: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido'),
        cap: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >{formik=>(
    	<Form onSubmit={formik.handleSubmit}>
        {formik.touched.firstName && formik.errors.firstName ? (<TextField name="firstName" label={formik.errors.firstName} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="firstName" id="firstName" label="Nombre" variant="filled" className={classes.cuadros} onChange={formik.handleChange} />)}<br/>
        {formik.touched.lastName && formik.errors.lastName ? (<TextField name="lastName" label={formik.errors.lastName} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="lastName" label="Apellidos" variant="filled" className={classes.cuadros} onChange={formik.handleChange} />)}<br/>
        {formik.touched.email && formik.errors.email ? (<TextField name="email" label={formik.errors.email} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="email" label="Correo electronico" variant="filled" className={classes.cuadros} onChange={formik.handleChange} />)}<br/>
       	{formik.touched.date && formik.errors.date ? (<TextField type="date" name="date" error label={formik.errors.date} InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField type="date" name="date" label="Fecha de nacimiento" InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} />)}<br/>
       	{formik.touched.afect && formik.errors.afect ? (<TextField name="afect" label={formik.errors.afect} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="afect"  variant="filled" label="¿Qué tanto le afectó el desastre?" className={classes.cuadros} onChange={formik.handleChange} />)}<br/>
       	{formik.touched.cap && formik.errors.cap ? (<TextField name="cap" label={formik.errors.cap} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="cap" variant="filled" label="¿Cuáles son sus capacidades?" className={classes.cuadros} onChange={formik.handleChange} />)}<br/>
       	<Button type="submit" variant="contained" color="primary" >Subir</Button>
      	</Form>
    	)}
      
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
