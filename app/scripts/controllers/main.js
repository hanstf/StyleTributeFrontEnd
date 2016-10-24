'use strict';

/**
 * @ngdoc function
 * @name styleTributeFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the styleTributeFrontEndApp
 */
angular.module('styleTributeFrontEndApp')
    .controller('MainCtrl', function ($scope, $http, productService) {
        $scope.products = new productService(5);
        $scope.set_item_id = function (event, ui, item_id, index) {
            console.log(event);
            console.log(ui);
            console.log('item_id');
            console.log(item_id);
            console.log('index');
            console.log(index);

            // alert('asdasdsa');
        }


    });