angular
    .module('wit')
    .controller('HomeController', HomeController);

function HomeController($scope, RedditService) {
    $scope.redditThoughts = [];
    $scope.searchAPIs = function() {
        RedditService.getThoughts($scope.search).then(thoughts => {
            $scope.redditThoughts = thoughts;
        })
    }
}
