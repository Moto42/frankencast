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
          <Route path='/'>
            {/* TODO Mainpage Component */}
            <div>
              <p>This is the index page</p>
            </div>
          </Route>
          <Route path="/about">
            <div>
              <p>About Page</p>
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
