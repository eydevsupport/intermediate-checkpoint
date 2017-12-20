(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoLoadingIndicator', tomatoLoadingIndicator);
 
    function tomatoLoadingIndicator() {
        var directive = {
            scope: {
                text: "@?"
            },
            restrict: 'E',
            controller: TomatoLoadingIndicatorController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-loading-indicator/tomato-loading-indicator.directive.html'
        };
 
        return directive;
    }
 
    TomatoLoadingIndicatorController.$inject = [];
 
    function TomatoLoadingIndicatorController() {
        var vm = this;
        vm.text = "Loading...";
    }
 })();
 