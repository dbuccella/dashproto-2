(function () {
    'use strict';

    var app = angular.module('DashboardApp', ['ngRoute']);
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '/views/login.html',
                    controller: 'loginController'
                }).
                when('/login', {
                    templateUrl: '/views/login.html',
                    controller: 'loginController'
                }).
                when('/status/:period', {
                    templateUrl: '/views/status.html',
                    controller: 'statusController'
                }).
                when('/reqType/:period', {
                    templateUrl: '/views/reqType.html',
                    controller: 'reqTypeController'
                }).
                when('/reqType2/:period', {
                    templateUrl: '/views/reqType2.html',
                    controller: 'reqTypeController2'
                }).
                when('/reqSource/:period', {
                    templateUrl: '/views/reqSource.html',
                    controller: 'reqSourceController'
                }).
                when('/cancels/:period', {
                    templateUrl: '/views/cancels.html',
                    controller: 'cancelsController'
                }).
                otherwise({
                    redirecTo: '/'
                });
        }
    ]);

})();