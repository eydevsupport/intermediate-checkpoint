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
            var dataGroupedByColor = groupDataByColor(data);
                    
            _.forEach(dataGroupedByColor, function(color) {
                console.log(getOunceTotalsByColor(color["Brown"]))
            })

            var data = {
                labels: _.keys(_.groupBy(data, 'season.Title')),
                series: _.keys(_.groupBy(data, 'color.Title')),
                colors: _.keys(_.groupBy(data, 'color.ColorCode')),
                data: []
            }

            var chartData = [
                [5, 59, 80, 81],  // brown
                [28, 48, 40, 19], // yellow
                [65, 59, 80, 81], // green
                [28, 48, 40, 19]  // tomato
            ];

            return data;
        }

        function getOunceTotalsByColor(seasonsByColor) {
            var result = [];
        
            _.forOwn(seasonsByColor, function(seasonData, seasonName) {
                var seasonOunceTotal = {};
                seasonOunceTotal[seasonName] = sumOunces(seasonData);
                result.push(seasonOunceTotal);
            });

            return result;
        }

        function groupDataByColor(data) {
            return _.chain(data)
                .groupBy('color.Title')
                .map(function(season, key) {
                    var result = {};
                    result[key] = _.groupBy(season, 'season.Title');
                    return result;
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
