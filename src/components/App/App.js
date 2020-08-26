import React from 'react';
import './App.css';
import Header from '../Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {default as MainPage} from '../Pages_MainPage';

// TODO: new logos in /public/logo###.png

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <main>
        <Switch>
        <Route path="/about">
            <div>
              {/* TODO: Page_About Component */}
              <p>About Page</p>
            </div>
            </Route>
          <Route path='/'>
            <MainPage/>
          </Route>
        </Switch>
      </main>

      {/* TODO: Footer component */}
      </div>
    </Router>
  );
}

export default App;
