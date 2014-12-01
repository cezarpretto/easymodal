'use strict';

/**
 * @ngdoc function
 * @name easyModalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the easyModalApp
 */
angular.module('easyModalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
