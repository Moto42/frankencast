import React from 'react';
import {hireMePage} from 'constants/externalLinks';
/** Component displayed at the bottom of each page.
 * [Footer description]
 * @param       {[type]} props [description]
 * @return      {Component}
 */
function Footer(props) {
  return(<footer>
    &copy; <a href={hireMePage}>Wesley Williams 2020</a>
  </footer>);
}

export default Footer;
