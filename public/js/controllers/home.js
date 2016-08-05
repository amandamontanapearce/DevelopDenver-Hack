angular
    .module('wit')
    .controller('HomeController', HomeController);

function HomeController($scope, RedditService, $http) {
    $scope.redditThoughts = [];
    $scope.searchAPIs = function() {
        RedditService.getThoughts($scope.search).then(thoughts => {
            thoughts.forEach(ea => {
                $http.get("http://api.giphy.com/v1/gifs/search?q=" + ea.data.title + "&api_key=dc6zaTOxFJmzC").then(giph => {
                    $scope.redditThoughts.push({
                        title: ea.data.title,
                        image: giph.data.data[0].images.original.url
                    });
                })
            })
        })
    }
}
