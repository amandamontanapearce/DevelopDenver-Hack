angular
  .module('wit')
  .service('GiphyService', GiphyService)

  function GiphyService($http) {

  this.getGif = function(query) {
    return $http.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC").then(giph => giph.data[0].url)
  };
}
GiphyService.$inject = ['$http']
