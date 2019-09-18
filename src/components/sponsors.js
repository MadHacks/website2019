import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import amFam from '../img/sponsors/american_family.png';
import polco from '../img/sponsors/polco.png';
import mongoDB from '../img/sponsors/mongodb.png';
import perBlue from '../img/sponsors/perblue.png';
import facebook from '../img/sponsors/facebook.png';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    header: {
        color: 'rgb(244,154,2)',
        textAlign: 'center',
    },
    bigLogo: {
        backgroundColor: 'rgb(248,248,248, 0.9)',
        marginBottom: '50px',
        margin: 'auto',
        width: 450,
        height: 450,
    },
    mediumLogo: {
        backgroundColor: 'rgb(248,248,248, 0.9)',
        marginBottom: '50px',
        margin: 'auto',
        width: 300,
        height: 300,
    },
    smallLogo: {
        backgroundColor: 'rgb(248,248,248, 0.9)',
        marginBottom: '50px',
        margin: 'auto',
        width: 150,
        height: 150,
    }
});

export default function Sponsors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container ontainer>
            <Grid item xs={12}>
                <Typography variant="h1" component="h2" gutterBottom className={classes.header}>
                    Our sponsors
                </Typography>
            </Grid>
                <Grid item xs={12} sm={6}>
                    <Avatar src={amFam} className={classes.bigLogo}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Avatar src={polco} className={classes.bigLogo}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Avatar src={perBlue} className={classes.smallLogo}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Avatar src={mongoDB} className={classes.mediumLogo}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Avatar src={facebook} className={classes.smallLogo}/>
                </Grid>
        </Grid>
    </div>
  );
}
