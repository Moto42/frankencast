import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchJson from 'hooks/useFetchJson';
import { dataEndpoint, feedEndpoint } from 'constants/apiEndpoints';
import { Link } from 'react-router-dom';
import EpisodeList from 'components/EpisodeList';
import './Pages_DisplayFeed.css';


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
    // link,
    // TODO: List the doners
    // doners,
    items,
  } = feedData;

  return(<div className="Pages_DisplayFeed">
    <p className="Pages_DisplayFeed__title">{title}</p>
    <a className="Pages_DisplayFeed__subscribe" href={feedEndpoint(feedID)}>subscribe</a>
    <Link className="Pages_DisplayFeed__edit" to={`/edit/${feedID}`} > edit </Link>
    <p className="Pages_DisplayFeed__description">{description}</p>
    <img src={imgUrl} alt="" className="Pages_DisplayFeed__image"/>
    <EpisodeList className="Pages_DisplayFeed__EpisodeList" episodes={items} />
  </div>);
}

export default Pages_DisplayFeed;
