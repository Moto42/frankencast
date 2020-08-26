import {useEffect, useState} from 'react';

/** A memoized fetch for grabbing JSON stuff.
 *
 * @param  {String} url           address of remote JSON resorce.
 * @param  {Anything} preloadData The value to use for the 'data' before it is loaded.
 * @return {Something}            array touple of:
 *  - data: The data returned by the fetch.
 *  - isLoaded: bool, is the data loaded or not.
 */
function useFetchJson(url,preloadData=undefined) {
    const [data, setData] = useState(preloadData);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
      fetch(url)
        .then(r => r.json())
        .then(j => {
          setData(j);
          setLoaded(true);
        });
    },[url]);

    return [data, isLoaded];
}

export default useFetchJson;
