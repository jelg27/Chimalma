import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import io from 'socket.io-client';
import Sesion from './Sesion'
const socket = io();


navigator.geolocation.getCurrentPosition(position => {
  //alert(position.coords.latitude + " " + position.coords.longitude);
});

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: 224,
    width: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
   heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '70%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    width: '1000'
  },
}));

var i = [<br/>];
function trab(classes, [expanded, setExpanded]){

  
  socket.removeAllListeners();
  
  socket.emit('con:trab', {email: sessionStorage.getItem("email")});
  socket.on('message', (data) => {

      i.push(
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls={"bh-content"} id={"bh-header"} >
            <Typography className={classes.heading}>{data.email}</Typography>
            <Typography className={classes.secondaryHeading}>{data.nomSol}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                {data.des}
            </Typography>
          </AccordionDetails>
        </Accordion>
    );  

  });

}


export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Perfil" {...a11yProps(0)} />
          <Tab label="Trabajos disponibles" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        aasdasdads
      </TabPanel>
      <TabPanel value={value} index={1}>
        {trab(classes, [expanded, setExpanded])}
        {i}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}