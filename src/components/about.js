import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    header: {
        paddingTop: '100px',
        paddingLeft: 50,
        color: 'rgb(244,154,2)',
        textAlign: 'left',
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
                <br/><br/>
                Madhacks 2019 - Carbon will take place on October 19-20, 2019 in the Education Building at UW-Madison (1000 Bascom Mall, Madison, WI 53706). We look forward to seeing you all there!
                </Typography>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}