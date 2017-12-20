(function() {
    'use strict';

    angular
        .module('app')
        .factory('tomatoChartService', tomatoChartService);

    tomatoChartService.$inject = [];

    function tomatoChartService() {
        var service = {
            getChartOptions: getChartOptions,
            getBarChartData: getBarChartData,
            getLineChartData: getLineChartData
        };

        return service;    

        function getLineChartData(data) {
            var result = {
                data: getRevenueBySeason(data),
                labels: ["Spring", "Summer", "Fall", "Winter"],
                series: ["Revenue ($M)"],
                colors: [{
                    backgroundColor: 'rgba(255, 99, 71, 0.8)',
                    pointBackgroundColor: "#333",
                    pointHoverBackgroundColor: "#333",
                    borderColor: "#fff",
                    pointBorderColor: "#333",
                    pointHoverBorderColor: "#333",
                    pointBorderWidth: "3"
                }]
            }
            
            return result;
        }

        function getRevenueBySeason(data) {
            return [
                _.chain(data)
                    .groupBy('season.Title')
                    .map(function(seasonData, seasonName) {
                        var result = {};
                        result[seasonName] = _.chain(seasonData)
                            .groupBy("cost")
                            .reduce(function(memo, seasonDataGroupedByCost) {
                                return memo + Math.floor(seasonDataGroupedByCost.length * seasonDataGroupedByCost[0].cost);
                            }, 0)
                            .value();

                        return _.values(result);
                    })
                    .flatten()
                    .value()
            ];
        }

        function getBarChartData(data) {
            var result = {
                data: getYieldBySeason(data),
                labels: ["Spring", "Summer", "Fall", "Winter"],
                series: _.keys(_.groupBy(data, 'color.Title')),
                colors: _.keys(_.groupBy(data, 'color.ColorCode'))
            }
    
            return result;
        }

        function getYieldBySeason(data) {
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

        function getChartOptions(horizontalAxisLabel, verticalAxisLabel, displayLegend) {
            var labelFontSize = 16;
            var options = {
                legend: {
                    display: true,
                    labels: {
                        fontSize: labelFontSize - 2
                    }
                },
                scales: {
                    xAxes: [],
                    yAxes: []
                }
            };

            if (angular.isDefined(displayLegend)) {
                options.legend.display = displayLegend;
            }

            if (horizontalAxisLabel) {
                options.scales.xAxes = [
                    {
                        display: true,
                        position: 'bottom',
                        scaleLabel: {
                            display: true,
                            labelString: horizontalAxisLabel,
                            fontSize: labelFontSize
                        }
                    }   
                ];
            }

            if (verticalAxisLabel) {
                options.scales.yAxes = [
                    {
                        display: true,
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: verticalAxisLabel,
                            fontSize: labelFontSize
                        }
                    }   
                ];
            }

            return options; 
        }       
    }
})();
