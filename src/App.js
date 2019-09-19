import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';

import MLHBanner from './components/MLHBanner';
import Header from './components/Header';
import About from './components/About';
import Carbon from './components/Carbon';
import Sponsors from './components/Sponsors';
import QuoteLeft from './components/QuoteLeft';
import FAQ from './components/FAQ';
import QuoteRight from './components/QuoteRight';
import Footer from './components/Footer';

import aldo from './img/aldo_leopold.jpg';
import gaylord from './img/gaylord_nelson.jpg';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto Condensed"'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MLHBanner />
        <Header />
      <Grid container spacing={0}>
        <About />
      </Grid>
      <Grid container spacing={0}>
        <Carbon />
      </Grid>>
      <Grid container spacing={0}>
        <QuoteLeft
          avatar={aldo}
          author={
            <span>Aldo Leopold, <em>A Sand County Almanac</em></span>
          }
          title={
            <p>Conservationist & Professor Emeritus University of Wisconsin</p>
          }
          msg='“We abuse land because we regard it as a commodity belonging to us. When we see land as a community to which we belong, we may begin to use it with love and respect.”'/>
      </Grid>
      <Grid container spacing={0}>
        <FAQ />
      </Grid> 
      <Grid container spacing={0}>
        <QuoteRight
          avatar={gaylord}
          author="Gaylord Nelson"
          title="Former Wisconsin Senator & Founder of Earth Day"
          msg="“The ultimate test of man's conscience may be his willingness to sacrifice something today for future generations whose words of thanks will not be heard.”" />
      </Grid>
      <Grid container spacing={0}>
        <Sponsors />
      </Grid>
        <Footer />
    </ThemeProvider>
  );
}

export default App;