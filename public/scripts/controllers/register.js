'use strict';

/**
 * @ngdoc function
 * @name teachersHelper2App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the teachersHelper2App
 */
angular.module('teachersHelper2App')
  .controller('RegisterCtrl', ['$scope', function($scope) {
    $scope.messageH2 = 'Register Here';
    $scope.messageSmall = 'Sign up using the form below.';

    $scope.user = {};

    $scope.register = function() {
      // TODO : make a call to the backend to register the user. This should be via a service
      console.log($scope.user);

  	  $scope.registerForm.$setPristine();
  	  $scope.user = {};
    };

  }]);