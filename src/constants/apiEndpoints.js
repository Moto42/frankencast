/** The endpoints for the API.
*   Don't hardcode the URLs into the code, use these functions.
*/
//The root address of the server the API is running on.
export const baseURL = 'https://m42-custompodcast.glitch.me';

/** returns a JSON object representing a podcast feed in the database
*  Leaving the feedID blank will return a list of all the feedIDs in the database
*  PUT to this to update a feed.
*  POST to create a new feed. ... I think. Doublecheck the docs at the API
*/
export const dataEndpoint = (feedID='') => `${baseURL}/data/${feedID}`;
// returns XML of a given podcast feed.
export const feedEndpoint = (feedID) => `${baseURL}/feeds/${feedID}`;
//returns a JSON object representing an arbitrary RSS feed from a given url.
export const rssDataEndpoint = (url='') => `${baseURL}/rssdata/?rssurl=${url}`;
/**
 * returns the raw RSS XML from a given url. With the CORS headers set so you can use it.
 * @param  {String} [url=''] URL of the rss feed you wish to retrieve
 * @return {String}          The Raw XML data of the requested feed
 */
export const rssDataRawEndpoint = (url='') => `${baseURL}/rssdata/${url}?raw='true'`;


export default {
  dataEndpoint: (feedID) => dataEndpoint(feedID),
  feedEndpoint: (feedID) => feedEndpoint(feedID),
  rssDataEndpoint: (url) => rssDataEndpoint(url),
  rssDataRawEndpoint: (url) => rssDataRawEndpoint(url),
}
