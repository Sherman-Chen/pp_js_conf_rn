'use strict';

const yelp = require('yelp-fusion');
const clientId = '6diInag_AaJ5DW953SH5sQ';
const clientSecret = 'tKCbvczdQet4l1mFNCJTXpljDpN5SAj4bfseg0hjLTwNnq0bFJJcTVr8Gj5CzLCI';

export const yelpSearch = (query, location) => {
  return yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);
    const searchRequest = {
      term: query,
      location: location,
      limit: 10,
      radius: 20000
    };

    client.search(searchRequest).then(response => {
      console.log(response.jsonBody.businesses);
      console.log(Object.keys(response.jsonBody.businesses).length);
      return response.jsonBody.businesses;
    });
  }).catch(e => {
    console.log(e);
  });
}
