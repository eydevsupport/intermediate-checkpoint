(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoChart', tomatoChart);
 
    function tomatoChart() {
        var directive = {
            scope: {
                data: "<",
                type: "@",
                header: "@?",
                horizontalAxisLabel: "@?",
                verticalAxisLabel: "@?",
                displayLegend: "<?"
            },
            restrict: 'E',
            controller: TomatoChartController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-chart/tomato-chart.directive.html'
        };
 
        return directive;
    }
 
    TomatoChartController.$inject = ['tomatoChartService'];
 
    function TomatoChartController(tomatoChartService) {
        var vm = this;
        var chartServiceFunctionName = "get" + vm.type + "ChartData";
        vm.chartData = tomatoChartService[chartServiceFunctionName](vm.data, vm.type);
        vm.chartOptions = tomatoChartService.getChartOptions(
            vm.horizontalAxisLabel, vm.verticalAxisLabel, 
            vm.displayLegend
        );
    }
 })();
 