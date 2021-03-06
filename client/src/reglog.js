import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form } from 'formik';
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
import io from 'socket.io-client';
import Sesion from './Sesion'
const socket = io();

//Detectar si está en celular
function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

var width, but;

if(isMobile()){
  width = '80%';
  but = '60%';
}else{
  width = '40%';
  but = '20%';
}

//Propiedades del sistemita de tablas
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

//Tipos de propiedades
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
//propiedades que te dan el index donde va
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


//Estilos de los inputs y todo, es como un css
const useStyles = makeStyles((theme) =>({
	cuadros: {
		padding: '0px 0px 30px 0px',
		width: width,
	},
	boton: {
		background: 'linear-gradient(35deg, #3389EA 30%, #13A8EE 90%)',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		width: but,
		padding: '0, 30px',
	},
	root: {
    	flexGrow: 1,
    	backgroundColor: theme.palette.background.paper,
  	},
  	top: {
  		
  	},
}));


//Aqui se crean las tabs y todo en general
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
        	<Tab label="Inicio" {...a11yProps(0)} />
        	<Tab label="Registro empleado" {...a11yProps(1)} />
        	<Tab label="Registro empresas" {...a11yProps(1)} />
          <Tab label="Registro por chat" {...a11yProps(1)} />
          <Tab label="Iniciar sesión" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0}>
        <div ><img src="https://placekitten.com/1000/200" class="titulo" /></div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tristique quam, ac cursus ipsum. Mauris elementum viverra nisi imperdiet consectetur. Aenean feugiat dolor lectus. Nunc at augue non ante condimentum ultrices nec vitae purus. Fusce pretium enim a gravida porttitor. Suspendisse scelerisque, nisl nec finibus viverra, massa ipsum mattis velit, nec elementum quam odio at ante. Ut semper auctor mi ut fermentum. Morbi pharetra dui vel felis tincidunt euismod. Mauris vitae mollis mauris. Nunc aliquet nibh eu ipsum bibendum, vel fringilla est rutrum. Morbi aliquam tristique dapibus. Aenean porttitor est sed mollis viverra. Curabitur sagittis bibendum justo, ac mollis tortor malesuada eu. Aliquam iaculis, massa eu pretium fermentum, metus sem feugiat ligula, sed molestie nunc sem in nunc. Cras ligula est, rutrum id sagittis nec, consectetur non odio.

Aenean libero risus, vulputate eu accumsan nec, gravida eget lectus. Sed elementum dui non accumsan rhoncus. Ut quis justo mauris. In hac habitasse platea dictumst. Curabitur mollis lacus quis magna auctor, eu vulputate odio fringilla. Integer imperdiet luctus lobortis. Aliquam ac feugiat diam. Aliquam dictum lobortis dignissim. Donec vel felis ullamcorper, pellentesque arcu nec, commodo urna.

Sed facilisis augue vitae odio vestibulum viverra. Nullam vitae ultricies lectus. Integer eleifend neque vel ante bibendum pellentesque. Mauris maximus eu nunc vitae mollis. In interdum enim ut massa interdum, ac rutrum mauris gravida. Donec tempus metus ac pretium auctor. Etiam rutrum enim risus, quis euismod est tincidunt eu. In eu bibendum eros. Etiam at tristique ante. Ut volutpat in leo at varius.

Nullam egestas vitae purus sed sollicitudin. Cras non rhoncus libero. Integer posuere dolor elit, vel dignissim nunc dapibus at. Etiam venenatis tincidunt sem. Etiam nec condimentum est. Aenean mauris augue, convallis sit amet dignissim sed, sodales tincidunt tortor. Aliquam sit amet ipsum id purus bibendum condimentum eu vitae metus. Proin pretium dignissim ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc imperdiet eget massa nec dapibus. Maecenas vel neque luctus, commodo nisi vitae, commodo dui. Nam urna nulla, dictum ac purus ac, dapibus commodo diam. Praesent vestibulum molestie nunc, vel lobortis tellus facilisis eget. Aliquam dictum velit mi, et sollicitudin eros gravida nec. Sed ex purus, vehicula vulputate sapien efficitur, posuere porta mi.

Vivamus luctus nisl et tortor consectetur, eget aliquam sapien iaculis. Suspendisse quis luctus nulla. Fusce vel erat pellentesque, tincidunt velit id, efficitur elit. Nam lobortis fringilla mi non venenatis. Suspendisse nulla felis, commodo in auctor quis, venenatis nec libero. Donec rutrum accumsan tortor vitae ultrices. Pellentesque elementum faucibus varius. Quisque id nulla tortor. Nulla ultrices lobortis dui. Morbi at dui vel ligula molestie aliquam. Curabitur malesuada, arcu iaculis egestas sagittis, nisi lacus gravida lectus, sit amet luctus risus nibh a sem. Vivamus ut sodales ligula.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Formik
      		initialValues={{ firstName: '', lastName: '', email: '' , password: '', date: '', afect: '', cap: ''}}
      		validationSchema={Yup.object({
        	firstName: Yup.string().max(40, 'Nombre debe ser de 40 caracteres o menos').required('Este campo es requerido').matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/, 'No ingreses caracteres especiales'),
        	lastName: Yup.string().max(20, 'Apellidos deben ser de 40 caracteres o menos').required('Este campo es requerido').matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/, 'No ingreses caracteres especiales'),
        	email: Yup.string().email('Correo inválido').required('Este campo es requerido').matches(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/, 'No puedes ingresar esos caracteres'),
        	password: Yup.string().required('Este campo es requerido').min(8, 'Se requiere que sea de minimo 8 caracteres'),
          	passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben ser iguales'),
          	date: Yup.date().min('1920-01-01', 'Favor de ingresar una fecha más reciente').max('2002-01-01', 'Necesitas ser mayor de edad').required('Este campo es requerido'),
        	afect: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido').matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/, 'No ingreses caracteres especiales'),
        	cap: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido').matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ,]+$/, 'No ingreses caracteres especiales'),
      		
          })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          socket.emit('reg:Usu', values);
        }, 400);
      }}
    	>{formik=>(
    		<Form onSubmit={formik.handleSubmit}>
        		{formik.touched.firstName && formik.errors.firstName ? (<TextField name="firstName" helperText={formik.errors.firstName} label="Nombre" InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="firstName" id="firstName" label="Nombre" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
        		{formik.touched.lastName && formik.errors.lastName ? (<TextField name="lastName" helperText={formik.errors.lastName} label="Apellidos" InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="lastName" label="Apellidos" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
            	{formik.touched.email && formik.errors.email ? (<TextField name="email" helperText={formik.errors.email} label="email" variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="email" label="email" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
       			{formik.touched.password && formik.errors.password ? (<TextField name="password" type="password" helperText={formik.errors.password} label="Contraseña" InputLabelProps={{shrik: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="password" type="password" label="Contraseña" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
            	{formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (<TextField name="passwordConfirmation" type="password"  helperText={formik.errors.passwordConfirmation} label="Confirmar Contraseña" InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="passwordConfirmation" type="password" label="Confirmar Contraseña" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
            	{formik.touched.date && formik.errors.date ? (<TextField type="date" name="date" error helperText={formik.errors.date} label="Fecha de Nacimiento" InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField type="date" name="date" label="Fecha de nacimiento" InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
       			{formik.touched.afect && formik.errors.afect ? (<TextField name="afect" helperText={formik.errors.afect} label="¿Qué tanto le afectó el desastre?" variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} rows={5} multiline />) : (<TextField name="afect"  variant="filled" label="¿Qué tanto le afectó el desastre?" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}}  rows={5} multiline/>)}<br/>
       			{formik.touched.cap && formik.errors.cap ? (<TextField name="cap" helperText={formik.errors.cap} label="¿Cuáles son sus capacidades?" variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} rows={5} multiline />) : (<TextField name="cap" variant="filled" label="¿Cuáles son sus capacidades?" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} rows={5} multiline helperText="Ej. Reparación, construcción, instalación,...,etc. " />)}<br/>
       			<Button type="submit" variant="contained" className={classes.boton}>Subir</Button>
      		</Form>
    	)}
      
    </Formik>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Formik
      		initialValues={{ nomEmp: '', trab: '', email: '', cap: ''}}
      		validationSchema={Yup.object({
        	nomEmp: Yup.string().max(40, 'Nombre de la empresa debe ser de 40 caracteres o menos').required('Este campo es requerido').matches(/^[a-zA-Z ñ]+$/, 'No ingreses caracteres especiales'),
        	trab: Yup.string().max(20, 'El puesto deben ser de 40 caracteres o menos').required('Este campo es requerido').matches(/^[a-zA-Z ñ]+$/, 'No ingreses caracteres especiales'),
        	email: Yup.string().email('Correo inválido').required('Este campo es requerido').matches(/^[_a-z0-9-ñ]+(.[_a-z0-9-ñ]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/, 'No puedes ingresar esos caracteres'),
        	cap: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido').matches(/^[a-zA-Z0-9_ ñ]+$/, 'No ingreses caracteres especiales'),
      		})}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    	>{formik=>(
    		<Form onSubmit={formik.handleSubmit}>
        		{formik.touched.nomEmp && formik.errors.nomEmp ? (<TextField name="nomEmp" helperText={formik.errors.nomEmp} label="Nombre de la empresa" InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="nomEmp" label="Nombre de la empresa" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
        		{formik.touched.trab && formik.errors.trab ? (<TextField name="trab" helperText={formik.errors.trab} label="Trabajo ofertado" InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="trab" label="Trabajo ofertado" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
        		{formik.touched.email && formik.errors.email ? (<TextField name="email" helperText={formik.errors.email} label="email" variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="email" label="email" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
       			{formik.touched.cap && formik.errors.cap ? (<TextField name="cap" helperText={formik.errors.cap} label="¿Qué capacidades requiere el puesto ofertado?" variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} rows={5} multiline />) : (<TextField name="cap" variant="filled" label="¿Qué capacidades requiere el puesto ofertado?" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} rows={5} multiline/>)}<br/>
       			<TextField variant="filled" type="number" className={classes.cuadros}/><br/>
       			<Button type="submit" variant="contained" className={classes.boton}>Subir</Button>
      		</Form>
    	)}
    </Formik>
      </TabPanel>
      <TabPanel value={value} index={3} >
        <Box maxWidth="sm" height={500}>

        </Box>
        <div >
          <TextField type="text"  maxWidth="sm" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Formik
          validationSchema={Yup.object({
            email: Yup.string().email('Correo inválido').required('Este campo es requerido').matches(/^[_a-z0-9-ñ]+(.[_a-z0-9-ñ]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/, "No puedes ingresar esos caracteres"),
          })}
          initialValues={{ email: '', password: 'a'}}
          onSubmit={(values, { setSubmitting })=>{
            socket.emit('log:Usus', values);
            socket.on('message', data => {
              socket.removeAllListeners();
              if( data.password == values.password){
                sessionStorage.setItem("firstName", data.firstName);
                sessionStorage.setItem("lastName", data.lastName);
                sessionStorage.setItem("email", data.email);
                sessionStorage.setItem("cap", data.cap);
                sessionStorage.setItem("date", data.date);
                ReactDOM.render(
                  <Sesion />,
                  document.querySelector('#root')
                  );
              }else{
                alert("Correo o contraseña inválidos");
              }
                
            })
          }
          }
        >
          {formik=>(
            <Form onSubmit={formik.handleSubmit}>
            {formik.touched.email && formik.errors.email ? (<TextField name="email" helperText={formik.errors.email} label="Correo" variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="email" variant="filled" label="Correo" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
            <TextField name="password" label="Contraseña" variant="filled" InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} /><br/>
            <Button type="submit" variant="contained">Subir</Button>
            </Form>
            )
          }
        </Formik>
      </TabPanel>
    </div>
  );
}


