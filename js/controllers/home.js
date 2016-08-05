angular
    .module('wit')
    .controller('HomeController', HomeController);

function HomeController($scope, HomeController, RedditService) {
    $scope.redditThoughts = [];
    $scope.searchAPIs = function(word) {
        RedditService.getThoughts(word).then(thoughts => {
                $scope.redditThoughts = thoughts;
            }
        })
}
