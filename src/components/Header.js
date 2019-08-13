import React from 'react';
import logo from '../img/logo.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  logo: {
    height: '40vmin',
    pointEvents: 'none',
  },
  header: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20pt',
    color: 'white'
  },
  carbon: {
    color: '#4DBF00',
    lineHeight:'0.2'
  },
  applyButton: {
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    padding: '8px 24px',
    fontSize: '1.5rem',
    marginTop: '10px',
  }
});

export default function Header() {
  const classes = useStyles();
  const typeformLink = "https://madhacks-2019.typeform.com/to/sSeSiB";

  return (
    <Grid item xs={12} className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
      <Typography variant="h1" component="h2" gutterBottom>
          <b>MadHacks</b>
      </Typography>
      <Typography variant="h1" component="h2" gutterBottom className={classes.carbon}>
          <b>Carbon</b>
      </Typography>
      <Typography variant="h5" gutterBottom>
          University of Wisconsin–Madison
      </Typography>
      <Typography variant="h5" gutterBottom>
          October 19-20, 2019
      </Typography>
      <Button variant="outlined" href={typeformLink} className={classes.applyButton}>
          Apply
      </Button>
    </Grid>
  );
}