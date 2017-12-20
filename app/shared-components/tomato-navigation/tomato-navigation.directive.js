(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoNavigation', tomatoNavigation);
 
    function tomatoNavigation() {
        var directive = {
            scope: {},
            restrict: 'E',
            controller: TomatoNavigationController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-navigation/tomato-navigation.directive.html'
        };
 
        return directive;
    }
 
    TomatoNavigationController.$inject = [];
 
    function TomatoNavigationController() {
        var vm = this;
        vm.title = "Big Tomato Sauce Co.";
        vm.logoUrl = "../app/assets/images/tomato-logo.png";
    }
 })();
 