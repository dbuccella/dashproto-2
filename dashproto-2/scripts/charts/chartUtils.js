// fake data functions
function makeData(max, nvals) {
    var a = [];
    for (i = 0; i < nvals; i++) {
        a.push(Math.floor(Math.random() * max));
    }
    return a;
}
function updateData(a, delta, max) {
    /*
    a.shift();
    a.push(Math.floor(Math.random() * max));
    */
    var last = a[a.length - 1];
    a.shift();
    var nDelta = Math.random() * delta;
    if ((last + nDelta) > max)
        a.push(last - 2 * nDelta);
    else
        a.push(last + nDelta);
}

function updateDepData(da, a, delta) {
    /*
    a.shift();
    a.push(Math.floor(Math.random() * max));
    */
    var last = da[da.length - 1];
    a.shift();
    a.push(last + Math.random() * delta - delta);
}

function varyData(delta, a)
{
    var res = [];
    for (i = 0; i < a.length; i++)
        res.push(Math.abs(a[i] - Math.random() * delta));
    return res;
}

function makeLabel(start, nvals, inc) {
    var a = [];
    for (i = 0; i < nvals; i++) {
        a.push(start + i * inc);
    }
    return a;
}


function updateLabel(a, inc) {
    var last = a[a.length - 1];
    a.shift();
    a.push(last + inc);
}
/*
var totData = makeData(1000, 50);
var autoData = varyData(250, totData); //makeData(1000, 50);
var labels = makeLabel(1, 50);
*/

var myColors = {
    automated: "rgba(10, 120, 10, 0.7)",
    automatedH: "rgba(10, 120, 10, 0.5)",
    total: "rgba(50, 50, 50, 0.3)",
    totalH: "rgba(50, 50, 50, 0.2)",

    success: "rgba(0, 20, 100, 0.8)",
    successH: "rgba(0, 20, 100, 0.5)",
    multiple: "rgba(100, 0, 100, 0.5)",
    multipleH: "rgba(100, 0, 100, 0.4)",
    //
    typeTotal: "rgba(50, 50, 50, 0.3)",
    typeTotalH: "rgba(50, 50, 50, 0.2)",
    addEquip: "rgba(0, 50, 50, 0.5)",
    addEquipH: "rgba(0, 50, 50, 0.4)",
    resDisp: "rgba(50, 50, 0, 0.6)",
    resDispH: "rgba(50, 50, 0, 0.5)",
    spCancel: "rgba(150, 0, 0, 0.5)",
    spCancelH: "rgba(150, 0, 0, 0.4)",
    spCustCancel: "rgba(150, 150, 0, 0.6)",
    spCustCancelH: "rgba(150, 150, 0, 0.5)",
    goa: "rgba(200, 100, 0, 0.6)",
    goaH: "rgba(200, 100, 0, 0.5)",
    etaUpd: "rgba(0, 0, 150, 0.6)",
    etaUpdH: "rgba(0, 0, 150, 0.5)",
    addSvc: "rgba(150, 0, 150, 0.6)",
    addSvcH: "rgba(150, 0, 150, 0.5)",
    changeSvc: "rgba(0, 100, 0, 0.3)",
    changeSvcH: "rgba(0, 100, 0, 0.2)",
    updCase: "rgba(175, 20, 50, 0.7)",
    updCaseH: "rgba(175, 20, 50, 0.6)",
};

/*
function createLiveDataChart(ctx) {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Automated",
                    backgroundColor: myColors.automated,
                    borderColor: myColors.automated,
                    borderWidth: 1,
                    hoverBackgroundColor: myColors.automatedH,
                    hoverBorderColor: myColors.automatedH,
                    data: autoData,
                    fill: true,
                    pointRadius: 0
                },
                {
                    label: "Total",
                    backgroundColor: myColors.total,
                    borderColor: myColors.total,
                    //borderColor: "rgba(0,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: myColors.totalH,
                    hoverBorderColor: myColors.totalH,
                    data: totData,
                    pointRadius: 0,
                    fill: true,
                },

            ]

        }, options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //
    setInterval(function () {
        updateData(totData, 50, 1000);
        updateDepData(totData, autoData, 250);
        updateLabel(labels);
        myChart.update(0, true);

    }, 1000); //
    return myChart;
}

*/

function doughnutChartHelper(ctx, dataPts, labels, colors, colorsH, title) {
    var data = {
        labels: labels,
        datasets: [
            {
                data: dataPts,
                backgroundColor: colors,
                hoverBackgroundColor: colorsH
            }]
    };
    var options = {
        title: {
            display: true,
            position: 'bottom',
            fontSize: 13,
            text: title + ' ' + Math.floor(100 * dataPts[1] / dataPts[0]) + '%'
        }
    };
    var mychart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
    return mychart;
}

function pieChartHelper(ctx, dataPts, labels, colors, colorsH, title) {
    var data = {
        labels: labels,
        datasets: [
            {
                data: dataPts,
                backgroundColor: colors,
                hoverBackgroundColor: colorsH
            }]
    };
    var options = {
        legend: {
            display: false,
            fullWidth: false,
            position: 'bottom',

        },
        title: {
            display: false,
            position: 'bottom',
            fontSize: 13,
            text: title
        },
    };
    var mychart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
    return mychart;
}


function createUpdateCaseRatio(ctx) {
    return doughnutChartHelper(ctx,
        [714, 188],
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.updCase],
        [myColors.typeTotalH, myColors.updCaseH],
        'Update Case Automated/Total=');
}

function createAddEquipmentRatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.addEquip],
        [myColors.typeTotalH, myColors.addEquipH],
        'Add Equipment Automated/Total=');
}
function createResendDispatchRatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.resDisp],
        [myColors.typeTotalH, myColors.resDispH],
        'Resend Dispatch/Total=');
}

function createSPCancelRatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.spCancel],
        [myColors.typeTotalH, myColors.spCancelH],
        'SP Cancel/Total=');
}
function createSPCustomerCancelRatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.spCustCancel],
        [myColors.typeTotalH, myColors.spCustCancelH],
        'SP Customer Cancel/Total=');
}
function createGOARatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.goa],
        [myColors.typeTotalH, myColors.goaH],
        'GOA/Total=');
}
function createETAUpdRatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.etaUpd],
        [myColors.typeTotalH, myColors.etaUpdH],
        'ETA Update/Total=');
}
function createAddSvcRatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.addSvc],
        [myColors.typeTotalH, myColors.addSvcH],
        'Add Service/Total=');
}
function createChangeSvcRatio(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.typeTotal, myColors.changeSvc],
        [myColors.typeTotalH, myColors.changeSvcH],
        'Change Service/Total=');
}
function createTotalToAutomatedPieChart(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated'],
        [myColors.total, myColors.automated],
        [myColors.totalH, myColors.automatedH],
        'Automated Requests/Total=');
}
function createTotalToAutomatedSuccessPieChart(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Total', 'Automated Success'],
        [myColors.total, myColors.success],
        [myColors.totalH, myColors.successH],
        'Automated Successful/Total=');
}

function createAutomatedToASuccessPieChart(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Automated', 'Success'],
        [myColors.automated, myColors.success],
        [myColors.automatedH, myColors.successH],
        'Automated Success/Automated=');
}

function createAutomatedToMultiplePieChart(ctx, data) {
    return doughnutChartHelper(ctx,
        data,
        ['Automated', 'Multi-Request'],
        [myColors.automated, myColors.multiple],
        [myColors.automatedH, myColors.multipleH],
        'Multiple/Auto Success=');
}

function createRequestTypeBarChart(ctx, totals, automated) {
    var data = {
        labels: [
            "Add Equipment",
            "Resend Dispatch",
            "SP Cancel",
            "SP Customer Cancel",
            "GOA",
            "ETA Update",
            "Add Service",
            "Change Service",
            "Update Case"
        ],
        datasets: [
            {
                label: 'Total',
                data: totals, //[288, 615, 321, 415, 190, 381, 510, 222, 300],
                //backgroundColor: myColors.total,
                backgroundColor: [
                    myColors.addEquipH,
                    myColors.resDispH,
                    myColors.spCancelH,
                    myColors.spCustCancelH,
                    myColors.goaH,
                    myColors.etaUpdH,
                    myColors.addSvcH,
                    myColors.changeSvcH,
                    myColors.updCaseH
                ],
                hoverBackgroundColor: myColors.totalH
            },
            {
                label: 'Automated',
                data: automated, //[100, 130, 230, 50, 98, 72, 112, 73, 190],
                backgroundColor: [
                    myColors.addEquip,
                    myColors.resDisp,
                    myColors.spCancel,
                    myColors.spCustCancel,
                    myColors.goa,
                    myColors.etaUpd,
                    myColors.addSvc,
                    myColors.changeSvc,
                    myColors.updCase
                ],
                hoverBackgroundColor: myColors.totalH
            },

        ]
    };
    var options = {
        legend: {
            display: false,
        },
        title: {
            display: true,
            position: 'top',
            text: 'Totals vs. Automated'
        },
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                stacked: false
            }]
        }
    };
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function barChartHelper(ctx, myData, title)
{
    var options = {
        legend: {
            display: false,
        },
        title: {
            display: true,
            position: 'top',
            text: title
        },
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                stacked: false
            }]
        }
    };
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: myData,
        options: options
    });
}