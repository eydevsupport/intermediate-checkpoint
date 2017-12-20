(function() {
    'use strict';

    angular
        .module('app')
        .factory('tomatoChartService', tomatoChartService);

    tomatoChartService.$inject = [];

    function tomatoChartService() {
        var service = {
            getChartOptions: getChartOptions,
            getChartData: getChartData
        };

        return service;    

        function getChartData(data) {
            var result = {
                labels: ["Spring", "Summer", "Fall", "Winter"],
                series: _.keys(_.groupBy(data, 'color.Title')),
                colors: _.keys(_.groupBy(data, 'color.ColorCode')),
                data: groupDataByColor(data)
            }
    
            return result;
        }

        function groupDataByColor(data) {
            return _.chain(data)
                .groupBy('color.Title')
                .map(function(season) {
                    return _.chain(season)
                        .groupBy('season.Title')
                        .map(function(item, seasonName) {
                            var result = {};
                            result[seasonName] = sumOunces(item);
                            result.Ordinal = item[0].season.Ordinal;
                            return result;
                        })
                        .sortBy('Ordinal')
                        .map(function(item) {
                            return _.values(_.omit(item, 'Ordinal'))[0];
                        })
                        .value();
                })
                .value();
        }

        function sumOunces(data) {
            return _.reduce(data, function(totalOunces, item) {
                return totalOunces + item.ounces;
            }, 0);
        }

        function getChartOptions() {
            return {
                legend: {
                    display: true
                },
                scales: {
                    yAxes: [
                        {
                            display: true,
                            position: 'left',
                            scaleLabel: {
                                display: true,
                                labelString: 'Ounces'
                            }
                        }   
                    ],
                    xAxes: [
                        {
                            display: true,
                            position: 'bottom',
                            scaleLabel: {
                                display: true,
                                labelString: 'Seasons'
                            }
                        }   
                    ]
                }
            };
        }
    }
})();
