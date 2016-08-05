angular
    .module('wit')
    .controller('RedditController', RedditController);

function RedditController($scope, RedditService) {
    $scope.view = {};
}
