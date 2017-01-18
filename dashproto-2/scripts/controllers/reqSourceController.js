(function () {
    'use strict';

    angular
        .module('DashboardApp')
        .controller('reqSourceController', reqSourceController);

    reqSourceController.$inject = ['$scope', '$routeParams', 'dashboardService'];

    function reqSourceController($scope, $routeParams, dashboardService) {
        $scope.vName = "reqSource";
        $scope.period = $routeParams.period;
        $scope.data = dashboardService;


        // create 30 day graphs
        var d = {};
        if ($scope.period == "30") {
            d = $scope.data.analyticsData.sourceType.p30;
        }
        else {
            if ($scope.period == "7") {
                d = $scope.data.analyticsData.sourceType.p7;
            }
            else {
                // $scope.period == "1";
                d = $scope.data.analyticsData.sourceType.p1;
            }
        }

        // create graphs
        var ctx = document.getElementById("canvas1-1Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.ivr, d.ivrAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.updCase],
            [myColors.typeTotalH, myColors.updCaseH],
             'IVR Automated/Total=');

        ctx = document.getElementById("canvas1-2Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.webApp, d.webAppAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.automated],
            [myColors.typeTotalH, myColors.automatedH],
             'Web App Automated/Total=');

        ctx = document.getElementById("canvas1-3Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.rsc, d.rscAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.etaUpd],
            [myColors.typeTotalH, myColors.etaUpdH],
             'RSC Automated/Total=');

        ctx = document.getElementById("canvas1-4Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d._3rdParty, d._3rdPartyAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.resDisp],
            [myColors.typeTotalH, myColors.resDispH],
             '3rd Party Automated/Total=');

        ctx = document.getElementById("canvas2-1Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d._3rdPartySW, d._3rdPartyAutoSW],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.goa],
            [myColors.typeTotalH, myColors.goaH],
             '3rd Party SW Automated/Total=');

        ctx = document.getElementById("canvas2-2Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.poAssist, d.poAssistAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.changeSvc],
            [myColors.typeTotalH, myColors.changeSvcH],
             'PO Assist Automated/Total=');

        ctx = document.getElementById("canvas2-3Id").getContext("2d");
        doughnutChartHelper(ctx,
            [d.ageroSup, d.ageroSupAuto],
            ['Total', 'Automated'],
            [myColors.typeTotal, myColors.updCase],
            [myColors.typeTotalH, myColors.updCaseH],
             'Agero Support Automated/Total=');


    }
})();
