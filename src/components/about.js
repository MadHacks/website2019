import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        paddingTop: '100px',
        paddingRight: 50,
        color: 'rgb(244,154,2)',
        textAlign: 'right',
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

export default function About(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12}>
            <Typography variant="h1" component="h2" gutterBottom className={classes.header}>
                Wisconsin's Premier Hackathon
            </Typography>
        </Grid>
        <Paper className={classes.paper} >
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                Madhacks is the University of Wisconsin's twice-annual hackathon, bringing together participants from all over the US and Canada for 24 hours of hacking.
                Unlike other hackathons, MadHacks is going to be putting emphasis on the wacky, the original, and the downright impossible!
                </Typography>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}