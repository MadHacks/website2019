import React from 'react';
import logo from '../img/logo.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  carbon: {
    color: '#4DBF00',
    lineHeight:'0.2'
  },
  applyButton: {
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    padding: '8px 24px',
    fontSize: '1.5rem'
  }
});

export default function Header() {
  const classes = useStyles();
  const typeformLink = "https://madhacks-2018.typeform.com/to/sSeSiB";

  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </header>
  );
}