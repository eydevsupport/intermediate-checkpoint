(function() {
    'use strict';

    angular
        .module('app')
        .controller('MyFeatureController', MyFeatureController);
    
    MyFeatureController.$inject = [
        '$scope', 'restService'
    ];

    function MyFeatureController($scope, restService) {
        var vm = this;
        vm.data = {};
        
        activate();

        function activate() {
            Promise.all([
                // Call data functions
            ]).then(function(results) {
                // Save results to vm.data
            });
        }

        // Create data functions
    }
})();
