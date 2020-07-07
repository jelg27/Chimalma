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
        	<Tab label="Inicio" {...a11yProps(0)} />
        	<Tab label="Registro" {...a11yProps(1)} />
          

        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tristique quam, ac cursus ipsum. Mauris elementum viverra nisi imperdiet consectetur. Aenean feugiat dolor lectus. Nunc at augue non ante condimentum ultrices nec vitae purus. Fusce pretium enim a gravida porttitor. Suspendisse scelerisque, nisl nec finibus viverra, massa ipsum mattis velit, nec elementum quam odio at ante. Ut semper auctor mi ut fermentum. Morbi pharetra dui vel felis tincidunt euismod. Mauris vitae mollis mauris. Nunc aliquet nibh eu ipsum bibendum, vel fringilla est rutrum. Morbi aliquam tristique dapibus. Aenean porttitor est sed mollis viverra. Curabitur sagittis bibendum justo, ac mollis tortor malesuada eu. Aliquam iaculis, massa eu pretium fermentum, metus sem feugiat ligula, sed molestie nunc sem in nunc. Cras ligula est, rutrum id sagittis nec, consectetur non odio.

Aenean libero risus, vulputate eu accumsan nec, gravida eget lectus. Sed elementum dui non accumsan rhoncus. Ut quis justo mauris. In hac habitasse platea dictumst. Curabitur mollis lacus quis magna auctor, eu vulputate odio fringilla. Integer imperdiet luctus lobortis. Aliquam ac feugiat diam. Aliquam dictum lobortis dignissim. Donec vel felis ullamcorper, pellentesque arcu nec, commodo urna.

Sed facilisis augue vitae odio vestibulum viverra. Nullam vitae ultricies lectus. Integer eleifend neque vel ante bibendum pellentesque. Mauris maximus eu nunc vitae mollis. In interdum enim ut massa interdum, ac rutrum mauris gravida. Donec tempus metus ac pretium auctor. Etiam rutrum enim risus, quis euismod est tincidunt eu. In eu bibendum eros. Etiam at tristique ante. Ut volutpat in leo at varius.

Nullam egestas vitae purus sed sollicitudin. Cras non rhoncus libero. Integer posuere dolor elit, vel dignissim nunc dapibus at. Etiam venenatis tincidunt sem. Etiam nec condimentum est. Aenean mauris augue, convallis sit amet dignissim sed, sodales tincidunt tortor. Aliquam sit amet ipsum id purus bibendum condimentum eu vitae metus. Proin pretium dignissim ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc imperdiet eget massa nec dapibus. Maecenas vel neque luctus, commodo nisi vitae, commodo dui. Nam urna nulla, dictum ac purus ac, dapibus commodo diam. Praesent vestibulum molestie nunc, vel lobortis tellus facilisis eget. Aliquam dictum velit mi, et sollicitudin eros gravida nec. Sed ex purus, vehicula vulputate sapien efficitur, posuere porta mi.

Vivamus luctus nisl et tortor consectetur, eget aliquam sapien iaculis. Suspendisse quis luctus nulla. Fusce vel erat pellentesque, tincidunt velit id, efficitur elit. Nam lobortis fringilla mi non venenatis. Suspendisse nulla felis, commodo in auctor quis, venenatis nec libero. Donec rutrum accumsan tortor vitae ultrices. Pellentesque elementum faucibus varius. Quisque id nulla tortor. Nulla ultrices lobortis dui. Morbi at dui vel ligula molestie aliquam. Curabitur malesuada, arcu iaculis egestas sagittis, nisi lacus gravida lectus, sit amet luctus risus nibh a sem. Vivamus ut sodales ligula.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Formik
      		initialValues={{ firstName: '', lastName: '', email: '' , date: '', afect: '', cap: ''}}
      		validationSchema={Yup.object({
        	firstName: Yup.string().max(40, 'Nombre debe ser de 40 caracteres o menos').required('Este campo es requerido').matches(/^[a-zA-Z ]+$/, 'No ingreses caracteres especiales'),
        	lastName: Yup.string().max(20, 'Apellidos deben ser de 40 caracteres o menos').required('Este campo es requerido').matches(/^[a-zA-Z ]+$/, 'No ingreses caracteres especiales'),
        	email: Yup.string().email('Correo inválido').required('Este campo es requerido').matches(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/, 'No puedes ingresar esos caracteres'),
        	date: Yup.date().min('1920-01-01', 'Favor de ingresar una fecha más reciente').max('2002-01-01', 'Necesitas ser mayor de edad').required('Este campo es requerido'),
        	afect: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido').matches(/^[a-zA-Z0-9_ ]+$/, 'No ingreses caracteres especiales'),
        	cap: Yup.string().max(500, 'El límite es de 500 caracteres').required('Este campo es requerido').matches(/^[a-zA-Z0-9_ ]+$/, 'No ingreses caracteres especiales'),
      		})}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
            addUser(values);
          }}
    	>{formik=>(
    		<Form onSubmit={formik.handleSubmit}>
        		{formik.touched.firstName && formik.errors.firstName ? (<TextField name="firstName" label={formik.errors.firstName} InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="firstName" id="firstName" label="Nombre" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
        		{formik.touched.lastName && formik.errors.lastName ? (<TextField name="lastName" label={formik.errors.lastName} InputLabelProps={{shrink: true,}} variant="filled" error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="lastName" label="Apellidos" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
        		{formik.touched.email && formik.errors.email ? (<TextField name="email" label={formik.errors.email} variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField name="email" label="email" variant="filled" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
       			{formik.touched.date && formik.errors.date ? (<TextField type="date" name="date" error label={formik.errors.date} InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} />) : (<TextField type="date" name="date" label="Fecha de nacimiento" InputLabelProps={{shrink: true,}} className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} />)}<br/>
       			{formik.touched.afect && formik.errors.afect ? (<TextField name="afect" label={formik.errors.afect} variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} rows={5} multiline />) : (<TextField name="afect"  variant="filled" label="¿Qué tanto le afectó el desastre?" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}}  rows={5} multiline/>)}<br/>
       			{formik.touched.cap && formik.errors.cap ? (<TextField name="cap" label={formik.errors.cap} variant="filled" InputLabelProps={{shrink: true,}} error className={classes.cuadros} onChange={formik.handleChange} rows={5} multiline />) : (<TextField name="cap" variant="filled" label="¿Cuáles son sus capacidades?" className={classes.cuadros} onChange={formik.handleChange} InputLabelProps={{shrink: true,}} rows={5} multiline/>)}<br/>
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




function addUser(userdata){
  alert(userdata);
  
  
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jelg:<password>@chimalma.btawf.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if(err) alert(err);
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

  alert('fin');
}
