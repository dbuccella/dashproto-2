(function () {
    'use strict';

    angular
        .module('DashboardApp')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope']; 

    function loginController($scope) {
        $scope.title = 'loginController';
        $scope.message = '';
    }
})();
