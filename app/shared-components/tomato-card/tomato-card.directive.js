(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoCard', tomatoCard);
 
    function tomatoCard() {
        var directive = {
            scope: {
                header: '@?'
            },
            restrict: 'E',
            controller: TomatoCardController,
            bindToController: true,
            controllerAs: 'vm',
            transclude: true,
            templateUrl: './app/shared-components/tomato-card/tomato-card.directive.html'
        };
 
        return directive;
    }
 
    TomatoCardController.$inject = [];
 
    function TomatoCardController() {
        var vm = this;        
    }
 })();
 