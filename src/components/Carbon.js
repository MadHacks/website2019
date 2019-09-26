import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        paddingRight: '25px',
        marginBottom: '200px',
    },
    header: {
        paddingTop: '50px',
        color: '#4DBF00',
        textAlign: 'right',
    },
    paper: {
        width: '70%',
        minWidth: '177px',
        maxWidth: '800px',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: 'rgb(0,36,61, 0.75)',
        color: '#FFFFFF',
        marginLeft: 'auto',
    }
});

export default function Carbon(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h1" component="h2" gutterBottom className={classes.header}>
                    <b>Carbon?</b>
                </Typography>
            </Grid>
            <Paper className={classes.paper} >
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        MadHacks Carbon encourages competitors to bring their creativity and ingenuity to engineer solutions for sustainable living. Whether it's carbon emission, waste management, power efficiency, environmental agriculture, or any other concern, bring your ideas here. The collaborative spirit of our event will inspire teamwork and real implementation of your exciting ideas. Will you join us to contribute to a greener future?
                        
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    </div>
  );
}