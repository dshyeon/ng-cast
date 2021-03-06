angular.module('video-player')
.service('youTube', function($http) {
  this.results = {};
  this.getVideos = function(query, callback, listlength) {
    var result;
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        maxResults: listlength,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY,
        chart: 'mostPopular'
      }
    }).then((data) => {
      callback(data.data.items);
    }, () => {
      console.log('error');
    });
  };
});
