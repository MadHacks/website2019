import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    paper: {
        width: '100%',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: 'rgb(0,36,61)',
        color: '#FFFFFF',
        margin: 'auto',
    },
    socialIcon: {
        color: 'rgb(244,154,2)',
        margin: 10,
    }
});

export default function Footer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Paper className={classes.paper}>
            <Grid container>
                <Grid item xs={4}>
                    Questions? Email us at <a style={{color: 'rgb(244,154,2)'}} href="team@madhacks.io">team@madhacks.io</a>
                </Grid>
                <Grid item xs={4}>
                    <Typography gutterBottom>
                        Made with <span role="img" aria-label="cheese">🧀</span> in Madison
                    </Typography>
                    <a href="https://www.facebook.com/MadHacksUW/" className={classes.socialIcon} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
                    <a href="https://twitter.com/madhacksuw" className={classes.socialIcon} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="2x" icon={faTwitter} /></a>
                </Grid>
                <Grid item xs={4}>
                    <Typography gutterBottom>
                        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" style={{color: 'rgb(244,154,2)'}} target="_blank" rel="noopener noreferrer">MLH Code of Conduct</a>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </React.Fragment>
  );
}