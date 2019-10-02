import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';

import amFam from '../img/sponsors/american_family.png';
import polco from '../img/sponsors/polco.png';
import mongoDB from '../img/sponsors/mongodb.png';
import capOne from '../img/sponsors/capital_one.png';
import perBlue from '../img/sponsors/perblue.png';
import facebook from '../img/sponsors/facebook.png';
import fiveNines from '../img/sponsors/5nines.png';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: '70%',
        minWidth: '370px',
        margin: 'auto',
    },
    header: {
        color: 'rgb(244,154,2)',
        textAlign: 'center',
    },
    bigLogo: {
        backgroundColor: 'rgb(248,248,248, 0.9)',
        margin: 'auto',
        maxWidth: '350px',
        maxHeight: '350px',
        minWidth: '250px',
        minHeight: '250px',
        borderRadius: '250px',
        width: '40vw',
        height: '40vw',
    },
    mediumLogo: {
        backgroundColor: 'rgb(248,248,248, 0.9)',
        margin: 'auto',
        maxWidth: '200px',
        maxHeight: '200px',
        minWidth: '150px',
        minHeight: '150px',
        borderRadius: '150px',
        width: '20vw',
        height: '20vw',
    },
    smallLogo: {
        backgroundColor: 'rgb(248,248,248, 0.9)',
        margin: 'auto',
        maxWidth: '105px',
        maxHeight: '105px',
        minWidth: '80px',
        minHeight: '80px',
        borderRadius: '80px',
        width: '10vw',
        height: '10vw',
    },
    sponsorCont: {
        textAlign: 'center',
        margin: '20px'
    }
});

export default function Sponsors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h1" component="h2" gutterBottom className={classes.header}>
                    Our sponsors
                </Typography>
            </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={classes.sponsorCont}>
                        <a href="https://www.amfam.com/" target="_blank" rel="noopener noreferrer" >
                            <img src={amFam} className={classes.bigLogo} alt="Big American Family Insurance logo"/>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={classes.sponsorCont}>
                        <a href="https://info.polco.us/" target="_blank" rel="noopener noreferrer" > 
                            <img src={polco} className={classes.bigLogo} alt="Big Polco logo"/>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.sponsorCont}>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" >
                            <img src={mongoDB} className={classes.mediumLogo} alt="Medium Mongo DB Logo"/>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.sponsorCont}>
                        <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer" >
                            <img src={capOne} className={classes.mediumLogo} alt="Medium Capital One Logo"/>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className={classes.sponsorCont}>
                        <a href="http://www.perblue.com/" target="_blank" rel="noopener noreferrer" >
                            <img src={perBlue} className={classes.smallLogo} alt="Small PerBlue Logo"/>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className={classes.sponsorCont}>
                        <a href="https://5nines.com/" target="_blank" rel="noopener noreferrer" >
                                <img src={fiveNines} className={classes.smallLogo} alt="Small 5NINES Logo"/>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className={classes.sponsorCont}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >
                            <img src={facebook} className={classes.smallLogo} alt="Small Facebook logo"/>
                        </a>
                    </div>
                </Grid>
        </Grid>
    </div>
  );
}
