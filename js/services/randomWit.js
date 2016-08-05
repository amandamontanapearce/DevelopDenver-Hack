angular
    .module('wit')
    .factory('RandomService', RandomService);

function RedditService() {
    return {
        getThoughts: function() {
            return $http.get(`https://www.reddit.com/r/Showerthoughts/search.json?q=restrict_sr=on&sort=relevance&t=all`).then(thoughts => thoughts.data.children)
        }
    }
}
RedditService.$inject = ['$http'];
