import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Apply from './components/Apply';

function App() {
  return (
    <Switch>
      <Route path="/apply" component={Apply} />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
