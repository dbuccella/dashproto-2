(function () {
    'use strict';

    angular
        .module('DashboardApp')
        .controller('statusController', statusController);

    statusController.$inject = ['$scope', '$routeParams', 'dashboardService'];

    function statusController($scope, $routeParams, dashboardService) {
        $scope.vName = "status";
        $scope.period = $routeParams.period;
        $scope.data = dashboardService;


        // select data
        var d = {};
        if ($scope.period == "30") {
            d = $scope.data.analyticsData.totals.p30;
        }
        else {
            if ($scope.period == "7") {
                d = $scope.data.analyticsData.totals.p7;
            }
            else {
                // $scope.period == "1";
                d = $scope.data.analyticsData.totals.p1;
            }
        }

        var ctx = document.getElementById("totalToAutomatedChartId").getContext("2d");
        createTotalToAutomatedPieChart(ctx,
             [d.total,
              d.automated
             ]);
        var ctx2 = document.getElementById("totalToAutoSuccessChartId").getContext("2d");
        createTotalToAutomatedSuccessPieChart(ctx2,
             [d.total,
              d.automatedSuccess
             ]);

        var ctx3 = document.getElementById("totalToSuccessChartId").getContext("2d");
        createAutomatedToASuccessPieChart(ctx3,
             [d.automated,
              d.automatedSuccess
             ]);

        var ctx4 = document.getElementById("AutoToDoubleChanneledChartId").getContext("2d");
        createAutomatedToMultiplePieChart(ctx4,
             [d.automated,
              d.multiRequest
             ]);
        //
        $scope.liveChartOn = true;
        $scope.liveChartToggle = function () {
            if ($scope.liveChartOn) {
                clearInterval($scope.liveTimer);
                $scope.liveChartOn = false;
            }
            else {
                $scope.liveTimer = setLiveChartTimer(liveChart, 1000);
                $scope.liveChartOn = true;
            }
        }

        // create fake data
        var totData = makeData(1000, 50);
        var autoData = varyData(250, totData); //makeData(1000, 50);
        var seconds = new Date().getTime() / 1000;
        var labels = makeLabel(seconds, 50, 1000);
        
        // create chart
        var ctx5 = document.getElementById("liveChartId").getContext("2d");
        var liveChart = liveChartData(ctx5, labels, totData, autoData);

        // start data generator
        $scope.liveTimer = setLiveChartTimer(liveChart, 1000);

        function setLiveChartTimer(chart, interval) {
            return setInterval(function () {
                updateData(totData, 250, 1000);
                updateDepData(totData, autoData, 250);
                updateLabel(labels, 1000);
                chart.update(0, true);

            }, interval);
        }
    }


    function liveChartData(ctx, labels, totData, autoData) {
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Automated",
                        backgroundColor: myColors.automated,
                        borderColor: myColors.automated,
                        borderWidth: 2,
                        hoverBackgroundColor: myColors.automatedH,
                        hoverBorderColor: myColors.automatedH,
                        data: autoData,
                        fill: false, //true,
                        pointRadius: 0
                    },
                    {
                        label: "Total",
                        backgroundColor: myColors.total,
                        borderColor: myColors.total,
                        //borderColor: "rgba(0,99,132,1)",
                        borderWidth: 2,
                        hoverBackgroundColor: myColors.totalH,
                        hoverBorderColor: myColors.totalH,
                        data: totData,
                        pointRadius: 0,
                        fill: false, //true,
                    },

                ]

            }, options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        unitStepSize : 5,
                        time: {
                            //unit: 'second'
                        }
                    }]
                }
            }
        });
        return myChart;
    }

})();
