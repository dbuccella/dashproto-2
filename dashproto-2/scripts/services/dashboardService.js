(function () {
    'use strict';

    angular
        .module('DashboardApp')
        .factory('dashboardService', dashboardService);

    dashboardService.$inject = ['$http'];

    function dashboardService($http) {
        /*
                var service = {
                    getData: getData
                };
        
                return service;
        
                function getData() { }
        */
        var dashboard = {};

        dashboard.analyticsData = {
            totals: {
                'p30': {
                    'total': 180000,
                    'automated': 75000,
                    'automatedSuccess': 35000,
                    'multiRequest': 9221
                },
                'p7': {
                    'total': 43556,
                    'automated': 18221,
                    'automatedSuccess': 8790,
                    'multiRequest': 2340
                },
                'p1': {
                    'total': 6775,
                    'automated': 2343,
                    'automatedSuccess': 2133,
                    'multiRequest': 1400
                },

            },
            requestType: {
                'p30': {
                    'changeService': 18076,
                    'changeServiceAuto': 9102,
                    'addService': 13076,
                    'addServiceAuto': 4012,
                    'etaUpdate': 12011,
                    'etaUpdateAuto': 6102,
                    'goa': 9087,
                    'goaAuto': 5304,
                    'spCancel': 8022,
                    'spCancelAuto': 3304,
                    'custCancel': 9051,
                    'custCancelAuto': 4024,
                    'resendDisp': 12304,
                    'resendDispAuto': 3304,
                    'addEquip': 7014,
                    'addEquipAuto': 3304,
                    'updCase': 7022,
                    'updCaseAuto': 1088
                },
                'p7': {
                    'changeService': 4146,
                    'changeServiceAuto': 2046,
                    'addService': 3567,
                    'addServiceAuto': 1194,
                    'etaUpdate': 2593,
                    'etaUpdateAuto': 1809,
                    'goa': 2021,
                    'goaAuto': 1279,
                    'spCancel': 1998,
                    'spCancelAuto': 816,
                    'custCancel': 2462,
                    'custCancelAuto': 1114,
                    'resendDisp': 2528,
                    'resendDispAuto': 865,
                    'addEquip': 1726,
                    'addEquipAuto': 927,
                    'updCase': 2001,
                    'updCaseAuto': 322
                },
                'p1': {
                    'changeService': 598,
                    'changeServiceAuto': 347,
                    'addService': 497,
                    'addServiceAuto': 146,
                    'etaUpdate': 500,
                    'etaUpdateAuto': 197,
                    'goa': 272,
                    'goaAuto': 215,
                    'spCancel': 287,
                    'spCancelAuto': 115,
                    'custCancel': 282,
                    'custCancelAuto': 153,
                    'resendDisp': 355,
                    'resendDispAuto': 98,
                    'addEquip': 219,
                    'addEquipAuto': 107,
                    'updCase': 284,
                    'updCaseAuto': 35
                },
            },
            sourceType: {
                'p30': {
                    'ivr': 17622,
                    'ivrAuto': 7651,
                    'webApp': 12655,
                    'webAppAuto': 6255,
                    'rsc': 8755,
                    'rscAuto': 3333,
                    '_3rdParty': 7776,
                    '_3rdPartyAuto': 2221,
                    '_3rdPartySW': 5356,
                    '_3rdPartyAutoSW': 4311,
                    'poAssist': 2111,
                    'poAssistAuto': 761,
                    'ageroSup': 3511,
                    'ageroSupAuto': 881
                },
                'p7': {
                    'ivr': 5174,
                    'ivrAuto': 1759,
                    'webApp': 3099,
                    'webAppAuto': 1410,
                    'rsc': 1977,
                    'rscAuto': 767,
                    '_3rdParty': 2259,
                    '_3rdPartyAuto': 545,
                    '_3rdPartySW': 1163,
                    '_3rdPartyAutoSW': 1042,
                    'poAssist': 562,
                    'poAssistAuto': 155,
                    'ageroSup': 773,
                    'ageroSupAuto': 193
                },
                'p1': {
                    'ivr': 620,
                    'ivrAuto': 315,
                    'webApp': 491,
                    'webAppAuto': 251,
                    'rsc': 269,
                    'rscAuto': 139,
                    '_3rdParty': 328,
                    '_3rdPartyAuto': 93,
                    '_3rdPartySW': 226,
                    '_3rdPartyAutoSW': 133,
                    'poAssist': 63,
                    'poAssistAuto': 27,
                    'ageroSup': 135,
                    'ageroSupAuto': 25

                },
            },
            spCancelReasonType: {
                'p30': {
                    'autoPJD': 14525,
                    'autoTSVP': 4975,
                    'autoOOA': 7146,
                    'autoAJP': 4282,
                    'autoNDA': 6336,
                    'autoO': 1838
                },
                'p7': {
                    'autoPJD': 6111,
                    'autoTSVP': 2515,
                    'autoOOA': 3374,
                    'autoAJP': 1351,
                    'autoNDA': 3110,
                    'autoO': 1119
                },
                'p1': {
                    'autoPJD': 704,
                    'autoTSVP': 246,
                    'autoOOA': 457,
                    'autoAJP': 283,
                    'autoNDA': 252,
                    'autoO': 126,
                }


            },
            spCustomerCancelReasonType: {

            },
            ivr: {

            }
        };

        return dashboard;
    }


})();