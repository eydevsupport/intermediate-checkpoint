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
        
        activate();

        function activate() {
            restService.getTomatos().then(function(tomatos) {
                // Process tomatos
            })
        }
    }
})();
