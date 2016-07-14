(function () {
    'use strict';

    angular
        .module('DashboardApp')
        .controller('reqTypeController2', reqTypeController2);

    reqTypeController2.$inject = ['$scope', '$routeParams', 'dashboardService'];

    function reqTypeController2($scope, $routeParams, dashboardService) {
        $scope.vName = "reqType2";
        $scope.period = $routeParams.period;
        $scope.data = dashboardService;
        $scope.ctx = document.getElementById("ReqTypeBarId").getContext("2d");
        if ($scope.period == "30") {
            regenCharts($scope.ctx, $scope.data.analyticsData.requestType.p30);
        }
        else {
            if ($scope.period == "7") {
                regenCharts($scope.ctx, $scope.data.analyticsData.requestType.p7);
            }
            else {
                // $scope.period == "1";
                regenCharts($scope.ctx, $scope.data.analyticsData.requestType.p1);
            }
        }
    }

    function regenCharts(ctx, d)
    {
        createRequestTypeBarChart(ctx,
            [
                d.addEquip,
                d.resendDisp,
                d.spCancel,
                d.custCancel,
                d.goa,
                d.etaUpdate,
                d.addService,
                d.changeService,
                d.updCase
            ],
            [
                d.addEquipAuto,
                d.resendDispAuto,
                d.spCancelAuto,
                d.custCancelAuto,
                d.goaAuto,
                d.etaUpdateAuto,
                d.addServiceAuto,
                d.changeServiceAuto,
                d.updCaseAuto
            ]
            );
    }

})();