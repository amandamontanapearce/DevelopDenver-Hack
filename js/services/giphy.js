function GiphyService($http) {

  this.getGif = function(query) {
    return $http.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC")
  };
}

GiphyService.$inject = ['$http']

angular
  .module('app')
  .service('GiphyService', GiphyService)
