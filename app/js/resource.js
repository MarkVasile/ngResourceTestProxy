angular.module('myApp').

factory('Article', function($resource, $http) {
    var Article= $resource(
        '/app/article.html',
        {},
        {
            publish: {method: 'POST', params: {action: 'publish'}},
            update: {method: 'POST', params: {action: 'update'}}
        }
    );

    return Article;
});

