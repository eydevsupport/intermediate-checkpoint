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
        vm.loading = false;
        vm.tomatoes = [];
        
        activate();

        function activate() {
            vm.loading = true;
            restService.getTomatoes().then(function(tomatoes) {
                vm.tomatoes = tomatoes;
                vm.loading = false;
            })
        }
    }
})();
