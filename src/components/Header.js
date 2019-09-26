import React from 'react';
import logo from '../img/logo.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '11vh',
    marginBottom: 100,
  },
  logoCont: {
    textAlign: 'center',
  },
  logo: {
    height: '40vmin',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  fatRoboto: {
    fontSize:'5em',
    textAlign: 'center',
    lineHeight: 1,
  },
  thinRoboto: {
    fontSize: '1.5em',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  carbon: {
    color: '#4DBF00',
  },
  madhacks: {
    color: '#FFFFFF',
  },
  applyButton: {
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    padding: '8px 24px',
    fontSize: '1.5rem',
    margin: '10px',
  },
  buttonCont: {
    'textAlign': 'center',
  }
});

export default function Header() {
  const classes = useStyles();
  const typeformLink = "https://madhacks-2019.typeform.com/to/sSeSiB";

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={2500}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.logoCont}>
            <img src={logo} className={classes.logo} alt="logo" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography className={`${classes.fatRoboto} ${classes.madhacks}`}>
              <b>MadHacks</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={`${classes.fatRoboto} ${classes.carbon}`}>
              <b>Carbon</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.thinRoboto}>
              University of Wisconsin–Madison
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.thinRoboto}>
              October 19-20, 2019
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttonCont}>
            <Button variant="outlined" href={typeformLink} className={classes.applyButton}>
               Apply
            </Button>
          </div>
        </Grid>
      </Grid>
      </Fade>
    </div>
  );
}