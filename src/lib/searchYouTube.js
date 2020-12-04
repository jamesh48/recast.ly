var searchYouTube = (options, callback) => {
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
      // console.log(data);
      callback(data);
    },

    error: function(xhr, status, error) {
      const err = JSON.parse(xhr.responseText);
      let [code, reason, message] = [err.error.code, err.error.errors[0].reason, err.error.message];

      console.log(`error ${code}: ${reason}, ${message}`);
    }
  });

};

export default searchYouTube;
