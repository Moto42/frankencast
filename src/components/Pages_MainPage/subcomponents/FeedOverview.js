/** Displays a basic overview of a given feedId
 *
 *  This is for displaying in a list of feeds on the main page.
 *
 *  Props
 *  - feedId: *required*, string, the feedId of the feed to display here.
 */

import React from 'react';
import useFetchJson from 'hooks/useFetchJson';
import {dataEndpoint, feedEndpoint} from 'constants/apiEndpoints';
import {Link} from 'react-router-dom';
import './FeedOverview.css';

function FeedOverview(props) {
  const {feedID} = props;
  const [feedData, feedDataLoaded] = useFetchJson(dataEndpoint(feedID));
  if(!feedDataLoaded) {
    return (<div  className='FeedOverview FeedOverview--loading'>
      Loading data for {feedID}.
    </div>);
  } else {
    const {title,imgUrl, description} = feedData;
    return(<div className='FeedOverview'>
      <img src={imgUrl} alt="" className="FeedOverview__image" />
      <p className="FeedOverview__title">{title}</p>
      <p className="FeedOverview__description">{description}</p>
      <div className="FeedOverview__links">
        <Link className="FeedOverview__details_link" to={'/details/'+feedID}>details</Link>
        <Link className="FeedOverview__edit_link" to={'/edit/'+feedID}>edit</Link>
        <a className="FeedOverview__subscribe" href={feedEndpoint(feedID)}>subscribe</a>
      </div>
    </div>);
  }
}

export default FeedOverview;
