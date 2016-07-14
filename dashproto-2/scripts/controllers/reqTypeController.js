(function () {
    'use strict';

    angular
        .module('DashboardApp')
        .controller('reqTypeController', reqTypeController);

    reqTypeController.$inject = ['$scope', '$routeParams', 'dashboardService'];

    function reqTypeController($scope, $routeParams, dashboardService) {
        $scope.vName = "reqType";
        $scope.period = $routeParams.period;
        $scope.data = dashboardService;

        var d = {};
        if ($scope.period == "30") {
            d = $scope.data.analyticsData.requestType.p30;
        }
        else {
            if ($scope.period == "7") {
                d = $scope.data.analyticsData.requestType.p7;
            }
            else {
                // $scope.period == "1";
                d = $scope.data.analyticsData.requestType.p1;
            }
        }

        // create graphs
        var ctx = document.getElementById("canvas1-1Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.changeService, d.changeServiceAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.changeSvc],
            [myColors.typeTotalH, myColors.changeSvcH],
             'Change Svc Automated/Total=');

        ctx = document.getElementById("canvas1-2Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.addService, d.addServiceAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.addSvc],
            [myColors.typeTotalH, myColors.addSvcH],
             'Add Service Automated/Total=');

        ctx = document.getElementById("canvas1-3Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.etaUpdate, d.etaUpdateAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.etaUpd],
            [myColors.typeTotalH, myColors.etaUpdH],
             'ETA Update Automated/Total=');

        ctx = document.getElementById("canvas2-1Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.goa, d.goaAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.goa],
            [myColors.typeTotalH, myColors.goaH],
             'GOA Automated/Total=');

        ctx = document.getElementById("canvas2-2Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.spCancel, d.spCancelAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.spCancel],
            [myColors.typeTotalH, myColors.spCancelH],
             'SP Cancel Automated/Total=');

        ctx = document.getElementById("canvas2-3Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.custCancel, d.custCancelAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.spCustCancel],
            [myColors.typeTotalH, myColors.spCustCancelH],
             'Customer Cancel Automated/Total=');

        ctx = document.getElementById("canvas3-1Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.resendDisp, d.resendDispAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.resDisp],
            [myColors.typeTotalH, myColors.resDispH],
             'Resend Dispatch Automated/Total=');

        ctx = document.getElementById("canvas3-2Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.addEquip, d.addEquipAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.addEquip],
            [myColors.typeTotalH, myColors.addEquipH],
             'Add Equipment Automated/Total=');

        ctx = document.getElementById("canvas3-3Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.updCase, d.updCaseAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.updCase],
            [myColors.typeTotalH, myColors.updCaseH],
             'Update Case Automated/Total=');



    }
})();
