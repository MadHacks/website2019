import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    header: {
        color: 'rgb(244,154,2)',
        textAlign: 'center',
    },
    paper: {
        maxWidth: 800,
        padding: '50px',
        marginBottom: '100px',
        textAlign: 'center',
        backgroundColor: 'rgb(0,36,61, 0.75)',
        color: '#FFFFFF',
        margin: 'auto',
    }
});

export default function Sponsors() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12}>
            <Typography variant="h1" component="h2" gutterBottom className={classes.header}>
                Our sponsors
            </Typography>
        </Grid>
        <Paper className={classes.paper} >
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Sponsors to be announced soon!
                    Interested in sponsoring? Contact us at <a href="mailto:=sponsorship@madhacks.io">sponsorship@madhacks.io</a> 
                </Typography>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}
