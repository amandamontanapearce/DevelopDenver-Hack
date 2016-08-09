angular
    .module('wit')
    .controller('HomeController', HomeController);

function HomeController($scope, $http, RedditService) {
    $scope.searchAPIs = function() {
        $scope.redditThoughts = [];
        RedditService.getThoughts($scope.search).then(thoughts => {
            thoughts.forEach(ea => {
                $http.get("https://api.giphy.com/v1/gifs/search?q=" + ea.data.title + "&api_key=dc6zaTOxFJmzC").then(giph => {
                    $scope.redditThoughts.push({
                        title: ea.data.title,
                        author: ea.data.author,
                        url: ea.data.url,
                        image: giph.data.data[0].images.original.url,
                        imageURL: giph.data.data[0].url
                    });
                    $scope.counter = 0;
                    $scope.redditThought = $scope.redditThoughts[$scope.counter];
                })
            })
        })
    }
    $scope.nextThought = function() {
      $scope.counter ++;
      $scope.redditThought = $scope.redditThoughts[$scope.counter];
      $scope.$apply();
    }
}
