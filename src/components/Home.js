import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import MLHBanner from './MLHBanner';
import Header from './Header';
import About from './About';
import Carbon from './Carbon';
import Sponsors from './Sponsors';
import Schedule from './Schedule';
import QuoteLeft from './QuoteLeft';
import FAQ from './FAQ';
import QuoteRight from './QuoteRight';
import Footer from './Footer';

import aldo from '../img/aldo_leopold.jpg';
import gaylord from '../img/gaylord_nelson.jpg';

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

function Home() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.root}>
        <MLHBanner />

        <Header />

        <About />

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

        <Carbon />

        <FAQ />

        <Schedule />

        <QuoteRight
          avatar={gaylord}
          alt="Profile of Gaylord Nelson"
          author="Gaylord Nelson"
          title="Former Wisconsin Senator & Founder of Earth Day"
          msg="“The wealth of the nation is its air, water, soil, forests, minerals, rivers, lakes, oceans, scenic beauty, wildlife habitats and biodiversity... that's all there is. That's the whole economy. That's where all the economic activity and jobs come from. These biological systems are the sustaining wealth of the world.”" />

        <Sponsors />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
