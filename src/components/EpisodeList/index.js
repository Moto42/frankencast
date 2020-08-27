import React from 'react';

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

function EpisodeList(props) {
  return(<div className={'EpisodeList ' + props.className }>
    {
      props.episodes.map();
    }
  </div>);
}

export default EpisodeList;
