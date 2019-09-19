import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    avatar: {
        width: '100%',
        height: '100%',
        maxWidth: '300px',
        maxHeight: '300px',
        borderRadius: '300px',
        margin: 'auto',
    },
    paper: {
        maxWidth: '50%',
        padding: 40,
        marginBottom: 100,
        marginRight: 50,
        marginLeft: 'auto',
        textAlign: 'center',
        backgroundColor: 'rgb(244,154,2, 0.75)',
        color: '#FFFFFF',
    },
    author: {
        textAlign: 'right',
    },
});

export default function QuoteRight(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper className={classes.paper} >
            <Grid container justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        <em>{props.msg}</em>
                    </Typography>
                    <Typography variant="h5" className={classes.author} gutterBottom>
                        - {props.author}
                    </Typography>
                    <Typography variant="h6" className={classes.author} gutterBottom>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={props.avatar} className={classes.avatar} alt={props.alt}/>
                </Grid>
            </Grid>
        </Paper>
    </div>
  );
}