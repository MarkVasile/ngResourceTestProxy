'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'Article', function($scope, Article) {
      $scope.postArticle = function() {
        console.log('posting article');
        var action,
            a = new Article({content: $scope.article});

        if ($scope.edit) action = a.$update;
        else action = a.$save;

        action(function(data, status) {
            console.log('update or save post completed', data, status);
        });

      };
  }])

  .controller('MyCtrl2', ['$scope', 'Article', function($scope, Article) {
      $scope.postArticle = function() {
        console.log('posting article');
        var a = new Article({content: $scope.article});

        if ($scope.edit) {
            a.$update(function(data, status) {
                console.log('UPDATE COMPLETED', data, status);
            });
        } else {
            a.$save(function(data, status) {
                console.log('SAVE COMPLETED', data, status);
            });
        }
      };

  }]);
