/**
 * Created by Younes MAKRANE on 22/05/2017.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantsController', RestaurantsController);

    function RestaurantsController() {
        this.data = 'the data';
    }
}());