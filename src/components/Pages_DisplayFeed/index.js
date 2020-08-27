import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchJson from 'hooks/useFetchJson';
import {dataEndpoint} from 'constants/apiEndpoints';
import EpisodeList from 'components/EpisodeList';

// TODO: Handle 404 errors.

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
  const { feedID } = useParams();
  const [feedData] = useFetchJson(
    dataEndpoint(feedID),
    {
      title:       `Loading information for ${feedID}`,
      description: '',
      link:        '',
      imgUrl:      '',
      items:       [],
      doners:      [],
    }
  );
  if(feedID === undefined) return (
    <div className="Pages_DisplayFeed">
    <p>No feedID given.</p>
    </div>
  );

  const {
    title,
    description,
    imgUrl,
    link,
    doners,
    items,
  } = feedData;

  return(<div className="Pages_DisplayFeed">

    <EpisodeList className="Pages_DisplayFeed__EpisodeList" episodes={items} />
  </div>);
}

export default Pages_DisplayFeed;
