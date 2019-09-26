import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Typeform from './components/Typeform';

function App() {
  return (
    <Switch>
      <Route path="/apply" component={() => 
        <Typeform
          title="MadHacks 2019 Carbon Main Application"
          typeformLink="https://madhacks-2019.typeform.com/to/sSeSiB" 
          />}
        />
      <Route path="/mentor" component={() => 
        <Typeform
          title="Mentorship Carbon Form 2019 Fall"
          typeformLink="https://madhacks-2019.typeform.com/to/I48ILs" 
          />}
        />
      <Route path="/volunteer" component={() => 
        <Typeform
          title="Volunteer Fall 2019 MadHacks Carbon"
          typeformLink="https://madhacks-2019.typeform.com/to/VNfV0v" 
          />}
        />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
