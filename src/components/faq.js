import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    header: {
        color: 'rgb(244,154,2)',
        textAlign: 'center',
    },
    question: {
        fontSize: 30,
    },
    answer: {
        fontSize: 20,
    },
    questionGrid: {
        maxWidth: 800,
        margin: 'auto',
        marginBottom: 100, 
    },
    questionPanel: {
        maxWidth: 800,
        textAlign: 'center',
        backgroundColor: 'rgb(0,36,61, 0.75)',
        color: '#FFFFFF',
    }
});

export default function FAQ(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12}>
            <Typography variant="h1" component="h2" gutterBottom className={classes.header}>
                FAQs
            </Typography>
        </Grid>
        <Grid item xs={12} className={classes.questionGrid}>
            <ExpansionPanel className={classes.questionPanel}>
                <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.question}>What's a hackathon?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.answer}>
                        A hackathon is an event where students gather together to work on a software or hardware project. MadHacks Fall 2018 will be a 24 hours hackathon. If this is your first time attending, check out our hackathon veteran Spencer’s medium post on <a style={{color:'rgb(244,154,2)'}} href="https://medium.com/@spencerfricke/how-to-do-hackathons-4a96207d5d3d" target="_blank" rel="noopener noreferrer">How to Do Hackathons</a>.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.questionPanel}>
                <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.question}>Do I need a team?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.answer}>
                        We encourage students to work with a team of 2 - 4 people but you can work individually as well. If you don't have a team yet, there will be a team formation after the opening ceremony. If you want to find a team before the event, join the #team-formation slack channel.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.questionPanel}>
                <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.question}>Who can participate?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.answer}>
                        We welcome undergraduate and graduate students of all backgrounds. You don’t need to be a Computer Science or Engineering major to attend. If you don't know how to code, we will have workshops that teach you how to code and mentors that can help you with your project. We will also be providing travel reimbursements for students travling from other schools as well!
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.questionPanel}>
                <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.question}>What do I need to bring?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.answer}>
                        You need to bring a photo ID to check in. You should also bring a laptop, chargers, and anything else you will need for a 24 hour hackathon.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.questionPanel}>
                <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.question}>How much does it cost?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.answer}>
                        Admission to MadHacks is completely free. We will also be providing breakfast, lunch and dinner! There will also be workshops and activities throughout the event.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.questionPanel}>
                <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.question}>Will there be travel reimbursement?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.answer}>
                        Yes! We will assess all applications and provide travel reimbursements on a case-by-case basis. If we receive a large amount of applications from your school and your school is within 5-8 hour bus ride, we may be able to send a bus.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.questionPanel}>
                <ExpansionPanelSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.question}>Will there be prizes?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.answer}>
                        Yes! We will be posting details about different prizes as we get closer to the event. Stay tuned!
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    </div>
  );
}