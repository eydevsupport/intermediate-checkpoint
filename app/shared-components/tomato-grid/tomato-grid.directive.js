(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoGrid', tomatoGrid);
 
    function tomatoGrid() {
        var directive = {
            scope: {
                data: "<",
                listView: "<"
            },
            restrict: 'E',
            controller: TomatoGridController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-grid/tomato-grid.directive.html'
        };
 
        return directive;
    }
 
    TomatoGridController.$inject = ['tomatoGridService'];
 
    function TomatoGridController(tomatoGridService) {
        var vm = this;
        vm.filteredData = [];
        vm.searchText = "";
        vm.maxPerPage = 15;

        activate();

        function activate() {
            getFilteredData(vm.data, vm.listView);
        }

        function getFilteredData(data, filter) {
            if (filter) {
                vm.filteredData = tomatoGridService.filterDataByFarm(data, filter);
            } else {
                vm.filteredData = vm.data;
            }
        }

    }
 })();
 