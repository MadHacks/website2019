import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(time, event) {
    return { time, event };
}

const oct19 = [
  createData('9AM', 'Check in'),
  createData('11AM', 'Opening Ceremony: Welcome!'),
  createData('11:15AM', 'Team Finding and Brainstorm'),
  createData('12PM', 'Hacking begins!'),
  createData('1PM', 'Lunch'),
  createData('2PM - 6PM', 'Tech Talks and Sponsor Tables'),
  createData('7PM', 'Dinner'),
];

const oct20 = [
  createData('1AM', 'Midnight Snack'),
  createData('9AM', 'Breakfast'),
  createData('12PM', 'Hacking ends & Judging'),
  createData('1PM', 'Closing Ceremony'),
]

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent',
    maxWidth: 800,
    margin: 'auto',
    marginBottom: 200,
    overflowX: 'auto',
  },
  header: {
    paddingTop: '100px',
    paddingLeft: 50,
    color: 'rgb(244,154,2)',
    textAlign: 'left',
    fontSize: 80
  },
  schedBar: {
    backgroundColor: 'rgb(0,36,61, 0.75)',
  },
  table: {
    fontSize: 40,
  },
  tableItem: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  daySchedPaper: {
    backgroundColor: 'rgb(0,36,61, 0.75)'
  }
}));

export default function Schedule(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
            <Typography gutterBottom className={classes.header}>
                Schedule
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <FullWidthTabs className={classes.tabPanel} />
        </Grid>
      </Grid>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
  
function FullWidthTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
      <AppBar position="static" className={classes.schedBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          inkbarstyle={{background:'rgb(47,116,116)'}}
          variant="fullWidth"
          aria-label="schedule"
        >
          <Tab className={classes.tableItem} label="October 19th" {...a11yProps(0)} />
          <Tab className={classes.tableItem} label="October 20th" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} >
          <DaySchedTable events={oct19} />
        </TabPanel>
        <TabPanel value={value} index={1} >
          <DaySchedTable events={oct20} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

function DaySchedTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.daySchedPaper}>
      <Table className={classes.table}>
        <TableBody>
          {props.events.map(row => (
            <TableRow key={row.time} >
              <TableCell component="th" className={classes.tableItem} scope="row">
                {row.time}
              </TableCell>
              <TableCell align="center" className={classes.tableItem}>{row.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}