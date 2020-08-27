import React from 'react';
import {Link} from 'react-router-dom';
// TODO: have the navigation links indicate where you are in the app
function Nav(props) {
  return(<div>
    <Link to="/">Home</Link>
    <Link to='/about'>About</Link>
  </div>);
}

export default Nav;
