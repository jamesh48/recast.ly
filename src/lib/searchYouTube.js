//https://dev.to/aveb/making-your-first-get-request-to-youtube-search-api-4c2f
var searchYouTube = (options, callback) => {
  // Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
  callback(options);
  return;
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      console.log('success');
      callback(data.items);
    },
    error: function(xhr, status, error) {
      const err = JSON.parse(xhr.responseText);
      let [code, reason, message] = [err.error.code, err.error.errors[0].reason, err.error.message];

      console.log(`error ${code}: ${reason}, ${message}`);
    }
  });
  // Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
  // Accept an options object with the following properties:
  // query - the string to search for
  // max - the maximum number of videos to get, which should default to 5
  // key - an authorized YouTube Browser API key
  // Only GET embeddable videos
  // Make sure all the tests for searchYouTube are passing. You can open the tests with npm test

  // "Complete creating reusable API helper"
};

// var Parse = {

//   server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

//   create: function(message, successCB, errorCB = null) {
//     // todo: save a message to the server
//     $.ajax({
//       url: Parse.server,
//       type: 'POST',
//       data: JSON.stringify(message),
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB
//     });
//   },

//   readAll: function(successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'GET',
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function(error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     });
//   }

// };

export default searchYouTube;
