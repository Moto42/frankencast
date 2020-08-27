import React from 'react';

/** Give the full information about the podcast for a given feedID
 *
 * Should be found at URL/details/<feedID>
 *
 * if no feedID is given, tell the user that a feedID is required in the URL.
 * if no podcast is found for that FeedID, give the user a '404' error page.
 *
 * @param       {Object} props props passed in from parent element
 * @returns     {ReactElement}
 */
function Pages_DisplayFeed(props) {
  return(
    <p>Pages_DisplayFeed</p>
  );
}

export default Pages_DisplayFeed;
