import React from 'react';
import logo from '../img/logo.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: '40vmin',
    textAlign: 'center'
  },
  header: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  carbon: {
    color: '#4DBF00',
    fontSize:'5rem',
    textAlign: 'center',
    lineHeight: 1,
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
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <img src={logo} className={classes.logo} alt="logo" />
        </Grid>
        <Grid item xs={12}>
        <Typography style={{fontSize:'5rem', textAlign:'center', color:'white', lineHeight: 1}}>
            <b>MadHacks</b>
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography className={classes.carbon}>
            <b>Carbon</b>
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography >
            University of Wisconsin–Madison
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography>
            October 19-20, 2019
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" href={typeformLink} className={classes.applyButton}>
              Apply
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}