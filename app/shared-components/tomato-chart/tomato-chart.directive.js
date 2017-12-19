(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoChart', tomatoChart);
 
    function tomatoChart() {
        var directive = {
            scope: {},
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
        
        activate();

        function activate() {}
    }
 })();
 