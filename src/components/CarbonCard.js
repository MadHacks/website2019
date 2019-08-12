import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    card: {
        minHeight: 100,
        backgroundColor: 'rgb(0,201,0,0.5)',
        margin: 20,
        padding: 10,
    },
    cardContent: {
        color: '#FFFFFF'
    }
});

export default function CarbonCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardContent className={classes.CardContent}>
            <Typography component="h5" variant="h5" className={classes.cardContent} gutterBottom>
                {props.msg}
            </Typography>
        </CardContent>
    </Card>
  );
}