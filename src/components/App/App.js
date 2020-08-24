import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// TODO: new logos in /public/logo###.png

function App() {
  return (
    <Router>
      <div className="App">
      {/* TODO: Header component */}

      <main>
        <Switch>
        <Route path="/about">
            <div>
              {/* TODO: Page_About Component */}
              <p>About Page</p>
            </div>
            </Route>
          <Route path='/'>
            {/* TODO Page_Main Component */}
            <div>
              <p>This is the index page</p>
            </div>
          </Route>
        </Switch>
      </main>

      {/* TODO: Footer component */}
      </div>
    </Router>
  );
}

export default App;
