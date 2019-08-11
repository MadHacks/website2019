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
        color: '#4DBF00',
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