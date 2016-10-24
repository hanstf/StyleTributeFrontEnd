'use strict';

/**
 * @ngdoc service
 * @name styleTributeFrontEndApp.productService
 * @description
 * # productService
 * Service in the styleTributeFrontEndApp.
 */
angular.module('styleTributeFrontEndApp')
    .factory('productService', function ($http, $timeout) {

        var Products = function (totalPage) {
            this.items = [];
            this.busy = false;
            this.after = 1;
            this.totalPage = totalPage;
        };

        Products.prototype.nextPage = function () {
            if (this.busy) {
                return;
            }
            this.busy = true;
            $timeout(function () {
                if (this.after <= this.totalPage) {
                    $http.get('data/page' + this.after + '.json').success(function (data) {

                        data.products.sort(function (a, b) {
                            a = parseInt(a['stylesort']);
                            b = parseInt(b['stylesort']);
                            return a - b;
                        });
                        for (var i = 0; i < data.products.length; i++) {
                            this.items.push(data.products[i]);
                        };

                        this.after = this.after + 1;


                    }.bind(this));
                }

                this.busy = false;
            }.bind(this), 1000)
        };

        return Products;
    });