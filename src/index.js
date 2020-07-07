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
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) =>({
	cuadros: {
		padding: '0px 0px 30px 0px',
		width: '40%',
	},
	boton: {
		background: 'linear-gradient(35deg, #3389EA 30%, #13A8EE 90%)',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		width: '20%',
		padding: '0, 30px',
	},
	root: {
    	flexGrow: 1,
    	backgroundColor: theme.palette.background.paper,
  	},
  	top: {
  		backgroundColor: '#3389EA',
  	},
}));



export default function Tablas() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.top}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Item One" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
        		{formik.touched.firstName && formik.errors.firstName ? (<TextField name="firstName" label={formik.errors.firstName} InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="firstName" id="firstName" label="Nombre" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
        		{formik.touched.lastName && formik.errors.lastName ? (<TextField name="lastName" label={formik.errors.lastName} InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="lastName" label="Apellidos" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
        		{formik.touched.email && formik.errors.email ? (<TextField name="email" label={formik.errors.email} variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="email" label="Correo electronico" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
       			{formik.touched.date && formik.errors.date ? (<TextField type="date" name="date" error label={formik.errors.date} InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField type="date" name="date" label="Fecha de nacimiento" InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
       			{formik.touched.afect && formik.errors.afect ? (<TextField name="afect" label={formik.errors.afect} variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="afect"  variant="filled" label="¿Qué tanto le afectó el desastre?" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}}  rows={5} multiline/>)}<br/>
       			{formik.touched.cap && formik.errors.cap ? (<TextField name="cap" label={formik.errors.cap} variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="cap" variant="filled" label="¿Cuáles son sus capacidades?" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} rows={5} multiline/>)}<br/>
       			<Button type="submit" variant="contained" className={classes.boton}>Subir</Button>
      		</Form>
    	)}
      
    </Formik>
      </TabPanel>
    </div>
  );
}

ReactDOM.render(
  <Tablas />,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();