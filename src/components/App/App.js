import React from 'react';
import './App.css';
import Header from 'components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {default as MainPage} from 'components/Pages_MainPage';
import {default as FeedDetails} from 'components/Pages_DisplayFeed';
import Footer from 'components/Footer';

// TODO: new logos in /public/logo###.png
/** Entry point for the app.
*  Lays out the highest level structure of the page.
*  Also handles the routing for various URLs via the Router/Switch/Route
*
* @return {ReactElement}
* @constructor
*/

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
        <Route path="/details/:feedID?">
          <FeedDetails />
        </Route>
        <Route path='/'>
          <MainPage/>
        </Route>
        </Switch>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
