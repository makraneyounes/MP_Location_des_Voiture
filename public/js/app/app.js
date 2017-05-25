/**
 * Created by Younes MAKRANE on 22/05/2017.
 */

'use strict';

angular
    .module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo:'/restaurants'});
    }]);