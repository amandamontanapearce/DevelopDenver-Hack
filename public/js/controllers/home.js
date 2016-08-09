angular
    .module('wit')
    .controller('HomeController', HomeController);

function HomeController($scope, $http, RedditService) {
    $scope.redditThoughts = [];
    $scope.searchAPIs = function() {
        RedditService.getThoughts($scope.search).then(thoughts => {
            thoughts.forEach(ea => {
                $http.get("http://api.giphy.com/v1/gifs/search?q=" + ea.data.title + "&api_key=dc6zaTOxFJmzC").then(giph => {
                    $scope.redditThoughts.push({
                        title: ea.data.title,
                        author: ea.data.author,
                        url: ea.data.url,
                        image: giph.data.data[0].images.original.url,
                        imageURL: giph.data.data[0].url
                    });
                })
            })
        })
    }
    $scope.change = function() {
      $scope.redditThoughts = [];
        RedditService.getThoughts($scope.search).then(thoughts => {
            thoughts.forEach(ea => {
                $http.get("http://api.giphy.com/v1/gifs/search?q=" + ea.data.title + "&api_key=dc6zaTOxFJmzC").then(giph => {
                    $scope.redditThoughts.push({
                        title: ea.data.title,
                        author: ea.data.author,
                        url: ea.data.url,
                        image: giph.data.data[0].images.original.url,
                        imageURL: giph.data.data[0].url
                    });
                })
            })
        })
    }
}
