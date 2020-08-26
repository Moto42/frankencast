/** Displays a list of Feeds, with their details.
 *
 * # Props
 * - feedIDs: *required*, [string], An array of strings, each string being a
 *            feedId to display.
 */
import React from 'react';
import FeedOverview from './FeedOverview';

function DisplayFeeds(props) {
  return(<div>
    {props.feedIDs.map(f => <FeedOverview feedID={f} key={f} />)}
  </div>);
}

export default DisplayFeeds;
