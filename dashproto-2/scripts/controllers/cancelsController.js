(function () {
    'use strict';

    angular
        .module('DashboardApp')
        .controller('cancelsController', cancelsController);

    cancelsController.$inject = ['$scope', '$routeParams', 'dashboardService'];

    function cancelsController($scope, $routeParams, dashboardService) {
        $scope.vName = "cancels";
        $scope.period = $routeParams.period;
        $scope.data = dashboardService;
        $scope.spCancelTotal = 0;
        // select period
        var d = {};
        if ($scope.period == "30") {
            d = $scope.data.analyticsData.spCancelReasonType.p30;
            $scope.spCancelTotal = $scope.data.analyticsData.requestType.p30.spCancel;
        }
        else {
            if ($scope.period == "7") {
                d= $scope.data.analyticsData.spCancelReasonType.p7;
                $scope.spCancelTotal = $scope.data.analyticsData.requestType.p7.spCancel;
            }
            else {
                // $scope.period == "1";
                d= $scope.data.analyticsData.spCancelReasonType.p1;
                $scope.spCancelTotal = $scope.data.analyticsData.requestType.p1.spCancel;
            }
        }
        //-- temporary : adjust for fake data
        $scope.spCancelTotal = d.autoPJD +
                        d.autoTSVP +
                        d.autoOOA +
                        d.autoAJP +
                        d.autoNDA +
                        d.autoO;
        //--
        $scope.periodData = d;
        $scope.labels = [
                "Prior Job Delay",
                "Traffic/Service Vehicle Problem",
                "Out of Area",
                "Another Job Priority",
                "No Driver Available",
                "Other"
        ]; 
        // build chart
        var data = {
            labels: $scope.labels,
            datasets: [
                {
                    label: 'Reason',

                    data: [
                        d.autoPJD,
                        d.autoTSVP,
                        d.autoOOA,
                        d.autoAJP,
                        d.autoNDA,
                        d.autoO
                    ],
                    backgroundColor: [
                        myColors.addEquipH,
                        myColors.resDispH,
                        myColors.spCancelH,
                        myColors.spCustCancelH,
                        myColors.goaH,
                        myColors.etaUpdH,
                    ],
                    hoverBackgroundColor: myColors.totalH
                },
            ]
        };
        var ctx = document.getElementById("canvas1-1Id").getContext("2d");
        barChartHelper(ctx, data, 'SP Cancel By Reason Type');
        ctx = document.getElementById("canvas0-1Id").getContext("2d");
        pieChartHelper(
            ctx,
            [d.autoPJD, d.autoTSVP, d.autoOOA, d.autoAJP, d.autoNDA, d.autoO],
            ["Prior Job Delay", "Traffic/Service Vehicle Problem","Out of Area",
                "Another Job Priority","No Driver Available", "Other"],
            [myColors.addEquipH, myColors.resDispH, myColors.spCancelH,
             myColors.spCustCancelH, myColors.goaH, myColors.etaUpdH],
             myColors.totalH,
            ''
            );
    }
})();
