import React from 'react';
import useFetchJson from 'hooks/useFetchJson';
import {dataEndpoint} from 'constants/apiEndpoints';
import DisplayFeeds from './subcomponents/DisplayFeeds';

/** The 'frontpage' of the app. at route '/'
 * Display a list of the currently available feeds.
 * @param       {Object} props React props passed into this Component
 * @constructor
 */
function Pages_MainPage(props) {
  const [feedIDs] = useFetchJson(dataEndpoint(),[]);
  return(
    <DisplayFeeds feedIDs={feedIDs} />
  );
}

export default Pages_MainPage;
