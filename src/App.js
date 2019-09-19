import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import MLHBanner from './components/MLHBanner';
import Header from './components/Header';
import About from './components/About';
import Carbon from './components/Carbon';
//import Sponsors from './components/Sponsors';
import QuoteLeft from './components/QuoteLeft';
import FAQ from './components/FAQ';
import QuoteRight from './components/QuoteRight';
import Footer from './components/Footer';

import aldo from './img/aldo_leopold.jpg';
import gaylord from './img/gaylord_nelson.jpg';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto Condensed"'
  }
});

const useStyles = makeStyles({
  root: {
    padding: '0',
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.root}>
        <MLHBanner />
        <Header />
        <Grid container item xs={12} spacing={0}>
          <About />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <Carbon />
        </Grid>>
        <Grid container item xs={12} spacing={0}>
          <QuoteLeft
            avatar={aldo}
            alt="Profile of Aldo Leopold"
            author={
              <span>Aldo Leopold, <em>A Sand County Almanac</em></span>
            }
            title={
              <p>Conservationist & Professor Emeritus University of Wisconsin</p>
            }
            msg='“We abuse land because we regard it as a commodity belonging to us. When we see land as a community to which we belong, we may begin to use it with love and respect.”'/>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FAQ />
        </Grid> 
        <Grid container item xs={12} spacing={0}>
          <QuoteRight
            avatar={gaylord}
            alt="Profile of Gaylord Nelson"
            author="Gaylord Nelson"
            title="Former Wisconsin Senator & Founder of Earth Day"
            msg="“The ultimate test of man's conscience may be his willingness to sacrifice something today for future generations whose words of thanks will not be heard.”" />
        </Grid>

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
