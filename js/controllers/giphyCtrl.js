angular
    .module('wit')
    .controller('GiphyController', GiphyController);

function GiphyController($scope, GiphyService) {
    $scope.view = {};
}
