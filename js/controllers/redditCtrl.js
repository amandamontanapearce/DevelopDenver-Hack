angular
    .module('wit')
    .controller('RedditController', RedditController);

function RedditController($scope, RedditControllerService) {
    $scope.view = {};
}
