import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    header: {
        paddingTop: '100px',
        color: 'rgb(244,154,2)',
        textAlign: 'right',
        
    },
    paper: {
        padding: '50px',
        marginBottom: '100px',
        textAlign: 'center',
        backgroundColor: 'rgb(0,36,61, 0.75)',
        color: '#FFFFFF',
        margin: 'auto',
    }
});

export default function About() {
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
                Developing new solutions to today’s most pertinent problems is a challenge that is an important part of staying competitive and versatile. Among the most vital problems we face today is that of sustainability.
                <br/><br/>
                At this year’s MadHacks competition, we challenge students to bring their fresh perspectives on the topic of local and global sustainability:
                <br/><br/>
                - What creative solutions can we contribute for energy use and waste?
                <br/>
                - What other areas of society can we make more sustainable?
                <br/>
                - What role can technology play in the solutions?
                </Typography>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}