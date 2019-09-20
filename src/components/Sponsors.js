import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';

import amFam from '../img/sponsors/american_family.png';
import polco from '../img/sponsors/polco.png';
import mongoDB from '../img/sponsors/mongodb.png';
import perBlue from '../img/sponsors/perblue.png';
import facebook from '../img/sponsors/facebook.png';

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
        maxWidth: '100px',
        maxHeight: '100px',
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
                        <img src={amFam} className={classes.bigLogo} alt="Big American Family Insurance logo"/>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={classes.sponsorCont}>
                        <img src={polco} className={classes.bigLogo} alt="Big Polco logo"/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.sponsorCont}>
                        <img src={mongoDB} className={classes.mediumLogo} alt="Medium Mongo DB Logo"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.sponsorCont}>
                        <img src={perBlue} className={classes.smallLogo} alt="Small PerBlue Logo"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.sponsorCont}>
                        <img src={facebook} className={classes.smallLogo} alt="Small Facebook logo"/>
                    </div>
                </Grid>
        </Grid>
    </div>
  );
}
