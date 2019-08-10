import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    avatar: {
        margin: 'auto',
        width: 300,
        height: 300,
        display: 'block',
        marginLeft: 50
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
            <Grid container justify="center" alignItems="center">
                <Grid item xs>
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
                <Grid item xs>
                    <Avatar src={props.avatar} className={classes.avatar} />
                </Grid>
            </Grid>
        </Paper>
    </div>
  );
}