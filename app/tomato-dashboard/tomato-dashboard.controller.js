(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoDashboardController', TomatoDashboardController);
    
    TomatoDashboardController.$inject = [
        '$scope', 'restService'
    ];

    function TomatoDashboardController($scope, restService) {
        var vm = this;
        vm.tomatoes = [];
        
        activate();

        function activate() {
            restService.getTomatoes().then(function(tomatoes) {
                vm.tomatoes = tomatoes;
            })
        }
    }
})();
