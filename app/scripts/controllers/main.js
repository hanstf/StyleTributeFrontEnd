'use strict';

/**
 * @ngdoc function
 * @name styleTributeFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the styleTributeFrontEndApp
 */
angular.module('styleTributeFrontEndApp')
    .controller('MainCtrl', function ($scope, $http,productService) {
        $scope.product = new productService(5);
    });