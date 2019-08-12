import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
    bannerBar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    banner: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 50,
    }
});

const bannerSrc = 'https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg'

export default function MLHBanner(props) {
  const classes = useStyles();

  return (
    <AppBar position='absolute' className={classes.bannerBar}>
        <img src={bannerSrc} className={classes.banner} />
    </AppBar>
  );
}