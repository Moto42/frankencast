import React from 'react';
import EpisodeView from './subcomponents/EpisodeView';

/** Displays a list of episodes, giving the details of each.
 *
 * # Props
 * - episodes, Array, *required*, array of the episoded for this podcast,
 * reffered to as 'items' in the feedData object.
 * - className, String, *optional*, Additional className to add to this Component
 *
 * @param       {Object} props props passed in from parent element
 * @returns     {ReactElement}
 */

// TODO: Full details of episodes

function EpisodeList(props) {
  return(<div className={'EpisodeList ' + props.className }>
    {
      props.episodes.map(e => <EpisodeView episode={e} />)
    }
  </div>);
}

export default EpisodeList;
