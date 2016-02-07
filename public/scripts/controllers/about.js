'use strict';

/**
 * @ngdoc function
 * @name teachersHelper2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the teachersHelper2App
 */
angular.module('teachersHelper2App')
  .controller('AboutCtrl',['$scope', function ($scope) {
    $scope.messageH2 = 'Teacher\'s Helper';
    $scope.messageSmall = 'Helping you forget the boring stuff.';
  }]);
