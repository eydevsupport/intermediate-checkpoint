(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('navigation', navigation);
 
    function navigation() {
        var directive = {
            scope: {},
            restrict: 'E',
            controller: NavigationController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/navigation/navigation.directive.html'
        };
 
        return directive;
    }
 
    NavigationController.$inject = [];
 
    function NavigationController() {
        var vm = this;
        vm.title = "Big Tomato";
        vm.logoUrl = "../app/assets/images/tomato-logo.png";
        
        activate();

        function activate() {}
    }
 })();
 