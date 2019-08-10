import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto-condensed';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header';
import About from './components/About';
import Sponsors from './components/Sponsors';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto Condensed"'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <Header />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <About />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <Sponsors />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
