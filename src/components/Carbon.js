import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CarbonCard from './CarbonCard';

const useStyles = makeStyles({
    header: {
        paddingTop: 50,
        paddingRight: 50,
        color: '#4DBF00',
        textAlign: 'right',
        
    },
    paper: {
        maxWidth: 800,
        padding: '50px',
        marginBottom: '100px',
        textAlign: 'center',
        backgroundColor: 'rgb(0,36,61, 0.75)',
        color: '#FFFFFF',
        marginLeft: 'auto',
        marginRight: 50
    }
});

export default function Carbon(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12}>
            <Typography variant="h1" component="h2" gutterBottom className={classes.header}>
                <b>Carbon?</b>
            </Typography>
        </Grid>
        <Paper className={classes.paper} >
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Sustainability is among the most pertinent challenges facing society today. Sustainable development describes a path to sustainability through economic development without depletion of natural resources.  
                    <br/><br/>
                    At MadHacks Carbon, we challenge students to bring ingenuity and creativity to generate novel solutions on local and global sustainability: 
                </Typography>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <CarbonCard msg={"Create solutions for sustainable energy use and prevention and minimization of waste"} />
                </Grid>
                <Grid item xs={4}>
                    <CarbonCard msg={"Identify and remediate areas of society lacking sustainability"} />
                </Grid>
                <Grid item xs={4}>
                    <CarbonCard msg={"Interface with technology for sustainable solutions"} />
                </Grid>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}