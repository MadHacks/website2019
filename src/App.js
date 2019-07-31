import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto-condensed';
import Container from '@material-ui/core/Container';

import Header from './components/Header';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto Condensed"'
  },
});

function App() {
  return (
    <div className="App">
      <Container>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
