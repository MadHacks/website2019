import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    typeformFrame: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
  });
  
function Apply() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <iframe
                id="typeform-full"
                title="MadHacks 2019 Carbon Main Application"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://madhacks-2019.typeform.com/to/sSeSiB"
                className={classes.typeformFrame}
            >
            </iframe>
            <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
        </div>
    )
}

export default Apply