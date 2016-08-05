angular
    .module('wit')
    .factory('RedditService', RedditService);

function RedditService($http, GiphyService) {
    var thoughts = [];
    return {
        getThoughts: function(query) {
            return $http.get(`https://www.reddit.com/r/Showerthoughts/search.json?q=${query}&restrict_sr=on&sort=relevance&t=all`).then(thoughts => {
                var tempThoughts = thoughts.data.data.children;
                tempThoughts.forEach(thought => {
                    GiphyService.getGif(thought.data.title).then(image => {
                        console.log(image);
                        // thoughts.push(thought.data.title, image);
                        // console.log(thoughts);
                    })
                })
            })
        }
    }
}

RedditService.$inject = ['$http'];
