import React from 'react';

/** Displays detailed information about a given episode.
 *
 * @param       {Object} props props passed in from parent element
 * @returns     {ReactElement}
 */
function EpisodeView(props) {
  const {title,description} = props.episode;
  return(<div className='EpisodeView'>
    <p className="EpisodeView__title">{title}</p>
    <p className="EpisodeView__description">{description}</p>
  </div>);
}

export default EpisodeView;
